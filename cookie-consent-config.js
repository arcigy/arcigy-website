/**
 * CookieConsent v3 Configuration
 * Documentation: https://cookieconsent.orestbida.com/
 */

// Load the library logic
window.addEventListener('load', function () {
    console.log('🍪 Cookie Config Script Loaded');

    // Check if the library is loaded
    if (typeof CookieConsent === 'undefined') {
        console.error('❌ CookieConsent library NOT found');
        return;
    }
    console.log('✅ CookieConsent library found');

    // Ensure DOM is fully ready
    if (!document.body) {
        console.error('❌ document.body is missing');
        return;
    }

    // WAIT 3 SECONDS BEFORE SHOWING (User Request + Safety)
    setTimeout(function () {
        console.log('⏳ Starting CookieConsent initialization...');

        try {
            CookieConsent.run({
                disablePageInteraction: false, // Important to prevent some blocking errors

                // gui_options: { ... } // Temporarily removed to simplify debugging

                categories: {
                    necessary: {
                        readOnly: true,
                        enabled: true
                    },
                    analytics: {
                        readOnly: false,
                        enabled: false,
                        autoClear: {
                            cookies: [
                                {
                                    name: /^_ga/,   // regex: match all cookies starting with '_ga'
                                },
                                {
                                    name: '_gid',   // string: exact name
                                }
                            ]
                        }
                    },
                    marketing: {
                        readOnly: false,
                        enabled: false
                    }
                },

                language: {
                    default: 'sk',
                    translations: {
                        en: {
                            consent_modal: {
                                title: 'We use cookies',
                                description: 'We use cookies to ensure you get the best experience on our website.',
                                primary_btn: {
                                    text: 'Accept all',
                                    role: 'accept_all'
                                },
                                secondary_btn: {
                                    text: 'Reject all',
                                    role: 'accept_necessary'
                                }
                            },
                            preferences_modal: {
                                title: 'Cookie Preferences',
                                accept_all_btn: 'Accept all',
                                reject_all_btn: 'Reject all',
                                save_btn: 'Save preferences',
                                close_btn_label: 'Close',
                                sections: [
                                    {
                                        title: 'Cookie Usage',
                                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience.'
                                    },
                                    {
                                        title: 'Strictly Necessary Cookies',
                                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                                        linked_category: 'necessary'
                                    },
                                    {
                                        title: 'Performance and Analytics Cookies',
                                        description: 'These cookies allow the website to remember the choices you have made in the past.',
                                        linked_category: 'analytics'
                                    },
                                    {
                                        title: 'Advertisement and Targeting Cookies',
                                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on.',
                                        linked_category: 'marketing'
                                    }
                                ]
                            }
                        },
                        sk: {
                            consent_modal: {
                                title: 'Používame cookies',
                                description: 'Používame súbory cookies, aby sme vám zabezpečili čo najlepší zážitok z našej webovej stránky.',
                                primary_btn: {
                                    text: 'Prijať všetky',
                                    role: 'accept_all'
                                },
                                secondary_btn: {
                                    text: 'Odmietnuť všetky',
                                    role: 'accept_necessary'
                                }
                            },
                            preferences_modal: {
                                title: 'Nastavenia Cookies',
                                accept_all_btn: 'Prijať všetky',
                                reject_all_btn: 'Odmietnuť všetky',
                                save_btn: 'Uložiť nastavenia',
                                close_btn_label: 'Zavrieť',
                                sections: [
                                    {
                                        title: 'Používanie Cookies',
                                        description: 'Používam cookies na zabezpečenie základných funkcií webovej stránky a na zlepšenie vášho online zážitku.'
                                    },
                                    {
                                        title: 'Nevyhnutné Cookies',
                                        description: 'Tieto cookies sú nevyhnutné pre správne fungovanie mojej webovej stránky. Bez týchto cookies by webová stránka nefungovala správne.',
                                        linked_category: 'necessary'
                                    },
                                    {
                                        title: 'Výkonnostné a Analytické Cookies',
                                        description: 'Tieto cookies umožňujú webovej stránke zapamätať si voľby, ktoré ste urobili v minulosti.',
                                        linked_category: 'analytics'
                                    },
                                    {
                                        title: 'Reklamné a Cielené Cookies',
                                        description: 'Tieto cookies zhromažďujú informácie o tom, ako používate webovú stránku, ktoré stránky ste navštívili a na ktoré odkazy ste klikli.',
                                        linked_category: 'marketing'
                                    }
                                ]
                            }
                        }
                    }
                }
            });

        } catch (e) {
            console.error("❌ CookieConsent Run Error:", e);
        }

        // Handle Language Switcher if present (Safely)
        const langBtns = document.querySelectorAll('.lang-btn');
        if (langBtns) {
            langBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    if (CookieConsent && typeof CookieConsent.setLanguage === 'function') {
                        CookieConsent.setLanguage(lang);
                    }
                });
            });
        }

    }, 3000); // 3000 milliseconds = 3 seconds delay
});
