// Simple GDPR Cookie Consent
(function () {
    const COOKIE_NAME = 'arcigy_consent_v1';

    // Translations
    const texts = {
        en: {
            title: '🍪 We use cookies',
            text: 'We use cookies to enhance your experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
            accept: 'Accept All',
            reject: 'Necessary Only',
        },
        sk: {
            title: '🍪 Používame cookies',
            text: 'Používame súbory cookies na zlepšenie vášho zážitku a analýzu návštevnosti. Kliknutím na "Prijať všetky" súhlasíte s používaním cookies.',
            accept: 'Prijať všetky',
            reject: 'Len nevyhnutné',
        }
    };

    function getLang() {
        return localStorage.getItem('language') || 'sk';
    }

    function hasConsented() {
        return localStorage.getItem(COOKIE_NAME);
    }

    function activateScripts() {
        console.log('🚀 Activating Analytics & Pixel...');

        // Google Analytics
        const gaScript = document.createElement('script');
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BGET4R4ZZ6";
        gaScript.async = true;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-BGET4R4ZZ6');

        // Meta Pixel
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1238525237872219');
        fbq('track', 'PageView');
    }

    function showBanner() {
        const lang = getLang();
        const t = texts[lang] || texts.en;

        const banner = document.createElement('div');
        banner.className = 'cookie-consent-modal';
        // HTML Structure with Emoji -> Span for gradient text potential
        banner.innerHTML = `
            <div class="cookie-title">${t.title.replace('🍪 ', '')}</div>
            <div class="cookie-text">${t.text}</div>
            <div class="cookie-buttons">
                <button id="cookie-accept" class="cookie-btn cookie-btn-accept">${t.accept}</button>
                <button id="cookie-reject" class="cookie-btn cookie-btn-reject">${t.reject}</button>
            </div>
        `;

        document.body.appendChild(banner);

        // Force reflow
        banner.offsetHeight;

        // Add visible class for animation (CSS handles opacity/translate)
        setTimeout(() => {
            banner.style.display = 'block'; // Ensure it's in flow
            requestAnimationFrame(() => banner.classList.add('visible'));
        }, 100);

        // Bind Events
        document.getElementById('cookie-accept').onclick = () => {
            localStorage.setItem(COOKIE_NAME, 'accepted');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 500); // Remove from DOM after anim
            activateScripts();
        };

        document.getElementById('cookie-reject').onclick = () => {
            localStorage.setItem(COOKIE_NAME, 'rejected');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 500);
        };
    }

    // Helper for easier debugging
    window.resetCookies = function () {
        localStorage.removeItem(COOKIE_NAME);
        location.reload();
        console.log('🔄 Cookies reset! Reloading...');
    };

    // Public method to update language dynamically
    window.updateCookieConsentLanguage = function (lang) {
        const t = texts[lang] || texts.en;
        const banner = document.querySelector('.cookie-consent-modal');

        if (banner) {
            const titleEl = banner.querySelector('.cookie-title');
            const textEl = banner.querySelector('.cookie-text');
            const acceptBtn = document.getElementById('cookie-accept');
            const rejectBtn = document.getElementById('cookie-reject');

            if (titleEl) titleEl.innerText = t.title.replace('🍪 ', '');
            if (textEl) textEl.innerText = t.text;
            if (acceptBtn) acceptBtn.innerText = t.accept;
            if (rejectBtn) rejectBtn.innerText = t.reject;
        }
    };

    // Init
    window.addEventListener('load', () => {
        // Wait 3 seconds (3000ms)
        setTimeout(() => {
            const consent = hasConsented();
            if (!consent) {
                showBanner();
            } else if (consent === 'accepted') {
                activateScripts();
            }
        }, 3000);
    });

})();
