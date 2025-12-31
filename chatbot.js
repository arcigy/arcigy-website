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
    const N8N_WEBHOOK_URL = 'https://n8n.srv1118451.hstgr.cloud/webhook/1bcefa53-eab4-4f14-92f9-7e9cb3bbbbee'; // Main chat webhook
    const N8N_CALENDAR_WEBHOOK_URL = 'https://n8n.srv1118451.hstgr.cloud/webhook/calendar-availability-check'; // New calendar webhook

    const chatBubble = `
        <div class="chat-bubble" id="chat-bubble">
            <img src="favicon.png" alt="Chat" style="width: 32px; height: 32px;">
        </div>
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
            chatWindowEl.classList.remove('closing');
            chatBubbleEl.classList.add('closing');
            chatWindowEl.style.display = 'flex';
            chatWindowEl.classList.add('opening');
            setTimeout(() => {
                chatBubbleEl.style.display = 'none';
                chatBubbleEl.classList.remove('closing');
            }, 300); // Match animation duration

            if (chatHistory.length === 0) {
                const lang = document.documentElement.lang || 'en';
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
            const response = await fetch('https://n8n.srv1118451.hstgr.cloud/webhook/1bcefa53-eab4-4f14-92f9-7e9cb3bbbbee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: messageText,
                    conversationID: conversationId,
                    history: chatHistory
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
        // 1. Display the text response from the new JSON structure
        const messageText = data.response || 'Sorry, I did not understand that.';
        appendMessage(messageText, 'bot', true);

        // 2. Check for the 'calendar' intention
        if (data.intention === "calendar") {
            if (window.arcigyCalendar) {
                window.arcigyCalendar.open();
            } else {
                console.error("Calendar widget not loaded");
                appendMessage("I'm trying to open the calendar, but it seems to be unavailable right now.", 'bot');
            }
        }
    }

    // OLD CALENDAR LOGIC REMOVED - using global widget now
});
