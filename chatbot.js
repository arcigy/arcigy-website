document.addEventListener('DOMContentLoaded', () => {
    // Global Calendar Variables
    let CAL_EVENT_TYPE_ID;
    let CAL_USERNAME;

    // Default Cal.com Credentials
    const DEFAULT_CAL_EVENT_TYPE_ID = '4027752';
    const DEFAULT_CAL_USERNAME = 'jan_novak_calcom'; // Assuming username from previous context or generic placeholder if unknown. 
    // Wait, the user provided the ID but not the username in the feedback. 
    // In step 2 context, username was "jan_novak_calcom". I will use that as default, but prioritize what comes from N8N if any.
    // Actually, looking at the user's feedback, they only sent the ID. I should probably keep the ID hardcoded or default.

    let CURRENT_VIEW_YEAR;
    let CURRENT_VIEW_MONTH; // 1-12
    const N8N_WEBHOOK_URL = 'https://my-website-backend.railway.internal/webhook/chat'; // New Railway chat webhook
    const N8N_CALENDAR_WEBHOOK_URL = 'https://my-website-backend.railway.internal/webhook/calendar-availability-check'; // New Railway calendar webhook

    const chatBubble = `
        <div class="chat-bubble" id="chat-bubble">
            <div class="notification-badge" id="notification-badge">1</div>
            <img src="favicon.png" alt="Chat" style="width: 32px; height: 32px;">
        </div>
        <div class="chat-notification-bubble" id="chat-notification-bubble"></div>
    `;

    const chatWindow = `
        <div class="chat-window" id="chat-window">
            <div class="chat-header">
                <span>Chat with us!</span>
                <button id="close-chat">&times;</button>
            </div>
            <div class="chat-messages" id="chat-messages"></div>
            

            <div class="chat-input-container">
                <input type="text" id="chat-input" placeholder="Type a message...">
                <button id="send-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatBubble);
    document.body.insertAdjacentHTML('beforeend', chatWindow);

    const chatBubbleEl = document.getElementById('chat-bubble');
    const badgeEl = document.getElementById('notification-badge');
    const notificationBubbleEl = document.getElementById('chat-notification-bubble');
    const chatWindowEl = document.getElementById('chat-window');
    const closeChatEl = document.getElementById('close-chat');
    const chatMessagesEl = document.getElementById('chat-messages');
    const chatInputEl = document.getElementById('chat-input');
    const sendBtnEl = document.getElementById('send-btn');
    const chatHeaderEl = document.querySelector('.chat-header');

    let conversationId = sessionStorage.getItem('conversationId');
    let chatHistory = JSON.parse(sessionStorage.getItem('chatHistory')) || [];

    function generateConversationId() {
        const date = new Date();
        const d = String(date.getDate()).padStart(2, '0');
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const y = String(date.getFullYear()).slice(-2);
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';
        for (let i = 0; i < 8; i++) {
            randomId += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return `${d}${m}${y}${randomId}`;
    }

    function toggleChatWindow() {
        const isChatOpen = chatWindowEl.style.display === 'flex';
        if (isChatOpen) {
            chatBubbleEl.classList.remove('closing');
            chatWindowEl.classList.add('closing');
            chatBubbleEl.style.display = 'flex';
            chatBubbleEl.classList.add('opening');
            setTimeout(() => {
                chatWindowEl.style.display = 'none';
                chatWindowEl.classList.remove('closing');
            }, 300); // Match animation duration
        } else {
            // Clear notifications when opening
            badgeEl.style.display = 'none';
            notificationBubbleEl.classList.remove('active', 'hiding');

            chatWindowEl.classList.remove('closing');
            chatBubbleEl.classList.add('closing');
            chatWindowEl.style.display = 'flex';
            chatWindowEl.classList.add('opening');
            setTimeout(() => {
                chatBubbleEl.style.display = 'none';
                chatBubbleEl.classList.remove('closing');
            }, 300); // Match animation duration

            if (chatHistory.length === 0) {
                const lang = sessionStorage.getItem('chatLang') || document.documentElement.lang || 'en';
                const welcomeMessage = lang === 'sk' ? 'Som Tony, ako vám môžem pomôcť?' : 'I am Tony, how can I help you?';
                appendMessage(welcomeMessage, 'bot', true);
            }
        }
    }

    chatBubbleEl.addEventListener('click', toggleChatWindow);
    closeChatEl.addEventListener('click', toggleChatWindow);

    async function sendMessage() {
        const messageText = chatInputEl.value.trim();
        if (messageText === '') return;

        if (!conversationId) {
            conversationId = generateConversationId();
            sessionStorage.setItem('conversationId', conversationId);
        }

        appendMessage(messageText, 'user');
        chatInputEl.value = '';
        chatInputEl.disabled = true;
        sendBtnEl.disabled = true;

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: messageText,
                    conversationID: conversationId,
                    history: chatHistory,
                    lang: localStorage.getItem('language') || document.documentElement.lang || 'en'
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Pass full data to handler
            handleBackendResponse(data);

        } catch (error) {
            console.error('Error sending message:', error);
            appendMessage('Error: Could not connect to the server.', 'bot');
        } finally {
            chatInputEl.disabled = false;
            sendBtnEl.disabled = false;
            chatInputEl.focus();
        }
    }

    function renderMessage(text, type, withTypingEffect = false) {
        const messageEl = document.createElement('div');
        messageEl.classList.add('message', type);

        if (withTypingEffect) {
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    messageEl.textContent += text.charAt(i);
                    i++;
                    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
                } else {
                    clearInterval(interval);
                }
            }, 50);
        } else {
            messageEl.textContent = text;
        }

        chatMessagesEl.appendChild(messageEl);
        chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    }

    function appendMessage(text, type, withTypingEffect = false) {
        // Save new message to history
        chatHistory.push({ text, type });
        sessionStorage.setItem('chatHistory', JSON.stringify(chatHistory));

        // Render the message visually
        renderMessage(text, type, withTypingEffect);

        // Show notification if chat is closed and message is from bot
        const isChatOpen = chatWindowEl.style.display === 'flex';
        if (!isChatOpen && type === 'bot') {
            badgeEl.style.display = 'flex';
            // Allow full text but with max-width from CSS
            notificationBubbleEl.textContent = text;
            notificationBubbleEl.classList.remove('hiding');
            notificationBubbleEl.classList.add('active');

            // Auto hide notification bubble after 8 seconds but keep badge
            setTimeout(() => {
                if (notificationBubbleEl.classList.contains('active')) {
                    notificationBubbleEl.classList.remove('active');
                    notificationBubbleEl.classList.add('hiding');
                    setTimeout(() => {
                        notificationBubbleEl.classList.remove('hiding');
                    }, 400);
                }
            }, 8000);
        }
    }

    sendBtnEl.addEventListener('click', sendMessage);
    chatInputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    chatInputEl.addEventListener('input', () => {
        chatInputEl.style.height = 'auto';
        chatInputEl.style.height = `${chatInputEl.scrollHeight}px`;
    });



    // Load chat history on page load without re-saving it
    chatHistory.forEach(msg => renderMessage(msg.text, msg.type, false));

    // REMOVE THIS CODE TO DISABLE DIRECT CALENDAR ACCESS
    const openCalendarBtn = document.getElementById('open-calendar-btn');
    if (openCalendarBtn) {
        openCalendarBtn.addEventListener('click', () => {
            openCalendarWindow();
        });
    }

    // --- Calendar Integration Logic ---

    // Step 2: Handle Backend Response
    function handleBackendResponse(data) {
        // 1. Display the text response
        const messageText = data.response || 'Sorry, I did not understand that.';
        appendMessage(messageText, 'bot', true);

        // 2. State tracking for frontend
        if (data.email && data.email !== "null") {
            sessionStorage.setItem('userEmail', data.email);
            localStorage.setItem('userEmail', data.email);
        }
        if (data.forname && data.forname !== "null") {
            sessionStorage.setItem('userName', data.forname);
            localStorage.setItem('userName', data.forname);
        }
        if (data.phone && data.phone !== "null") {
            sessionStorage.setItem('userPhone', data.phone);
            localStorage.setItem('userPhone', data.phone);
        }
        if (data.lang) sessionStorage.setItem('chatLang', data.lang);

        // 3. Intention handling
        if (data.intention === "calendar") {
            if (window.arcigyCalendar) {
                window.arcigyCalendar.open();
            }
        }
    }

    // Event listener for calendar booking
    window.addEventListener('calendar-book-initiated', (e) => {
        const { name, time, date } = e.detail;

        // Prioritize actual page language over session history
        const pageLang = localStorage.getItem('language') || document.documentElement.lang || 'en';
        const lang = pageLang.split('-')[0]; // Handle 'sk-SK' or 'en-US'

        // Format date to local format (d.m.Y)
        // date is usually YYYY-MM-DD
        const dateParts = date.includes('-') ? date.split('-') : date.split('.');
        let formattedDate = date;
        if (dateParts.length === 3) {
            if (dateParts[0].length === 4) {
                // YYYY-MM-DD -> DD.MM.YYYY
                formattedDate = `${parseInt(dateParts[2])}.${parseInt(dateParts[1])}.${dateParts[0]}`;
            } else {
                // Assume already in some local format, just ensure dots
                formattedDate = `${parseInt(dateParts[0])}.${parseInt(dateParts[1])}.${dateParts[2]}`;
            }
        }

        let msg;
        if (lang === 'sk') {
            msg = `Super ${name}! Tešíme sa na teba. Žiadosť o termín na ${formattedDate} o ${time} sme prijali. Prosím, skontroluj si teraz svoj email a potvrď rezerváciu kliknutím na odkaz v správe.`;
        } else {
            msg = `Great ${name}! We're looking forward to seeing you. Your request for ${formattedDate} at ${time} has been received. Please check your email and confirm your booking by clicking the link in the message.`;
        }

        appendMessage(msg, 'bot', true);
    });

    // OLD CALENDAR LOGIC REMOVED - using global widget now
});
