// Language Data
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            pricing: "Pricing",
            contact: "Contact"
        },
        hero: {
            title: "Last step to business arc.",
            subtitle: "We identify and automate core business processes—from lead generation and quality control to logistics and internal operations—to unlock significant growth.",
            cta: {
                primary: "Diagnose & Automate",
                secondary: "Explore Solutions"
            }
        },
        problems: {
            title: "Key Business Problems We Solve",
            card1: {
                title: "Inefficient Lead Flow",
                desc: "Manual lead qualification creates bottlenecks and missed opportunities in your sales pipeline."
            },
            card2: {
                title: "High Operational Costs",
                desc: "Repetitive manual tasks consume resources and prevent scaling without proportional cost increases."
            },
            card3: {
                title: "Inconsistent Quality Control",
                desc: "Human error in quality checks leads to inconsistencies and customer dissatisfaction."
            }
        },
        services: {
            title: "Our Automation Solutions",
            item1: {
                title: "Process Audit & Optimization",
                desc: "Comprehensive analysis of your current workflows to identify automation opportunities and efficiency gaps."
            },
            item2: {
                title: "Intelligent Lead Qualification & Management",
                desc: "Automated systems that score, route, and nurture leads through your sales funnel with precision."
            },
            item3: {
                title: "Supply Chain & Logistics Automation",
                desc: "Streamline inventory management, order processing, and delivery coordination with smart automation."
            },
            item4: {
                title: "Automated Quality Assurance Checks",
                desc: "Consistent quality control through automated validation, testing, and compliance monitoring."
            },
            item5: {
                title: "Smart Assistant Integration",
                desc: "Deploy intelligent call agents and virtual assistants to handle customer interactions and internal tasks."
            },
            cta: "Learn More About Our Services"
        },
        howitworks: {
            title: "How It Works",
            step1: {
                title: "Diagnose",
                desc: "We analyze your business processes to identify inefficiencies and automation opportunities."
            },
            step2: {
                title: "Design",
                desc: "We create custom automation solutions tailored to your specific business needs and goals."
            },
            step3: {
                title: "Deploy",
                desc: "We implement and monitor your automation systems, ensuring smooth integration and optimal performance."
            }
        },
        pricing: {
            title: "Pricing Plans",
            badge: "Most Popular",
            period: "Consultation Required", // Placeholder, but won't be displayed
            tier1: {
                name: "Automation Essentials",
                feature1: "Core Sales and Operation Automation (Majority)",
                feature2: "Process Audit & Solution Design",
                feature3: "Standard Integration (Max 2 Systems)",
                feature4: "Monthly Performance Reports",
                feature5: "AI Audits (Minority Service)",
                cta: "Schedule Meeting"
            },
            tier2: {
                name: "Growth Architect",
                feature1: "Comprehensive Automation of Critical Processes (Majority)",
                feature2: "Logistics and Sales Management Solution",
                feature3: "Priority Support and Optimization",
                feature4: "Custom Integrations (Up to 5 Systems)",
                feature5: "AI Websites / Sales Funnels (Minority Service)",
                cta: "Schedule Meeting"
            },
            tier3: {
                name: "Enterprise Custom",
                feature1: "Full Multi-System Integration and Optimization (Majority)",
                feature2: "Dedicated Automation Team (24/7 Monitoring)",
                feature3: "Advanced Analytics and BI Tools",
                feature4: "Custom Enterprise Packages & Security",
                feature5: "AI Employees (Minority Service)",
                cta: "Schedule Meeting"
            },
            cta: "Schedule Meeting",
            note: "All plans require a detailed consultation to determine scope and exact monthly investment."
        },
        aboutpreview: {
            title: "About ArciGy",
            text: "We are automation architects dedicated to solving systemic business problems through intelligent automation. Our mission is to help businesses achieve predictable growth by identifying and automating core processes that drive efficiency and scalability.",
            cta: "Learn More About ArciGy"
        },
        contact: {
            title: "Get Started Today",
            form: {
                forename: "Forename",
                surname: "Surname",
                company: "Company",
                email: "Email",
                phone: "Phone",
                summary: "Project Summary (focus on the problem you need to solve)",
                newsletter: "I want to receive the newsletter",
                gdpr: "I agree to the processing of my personal data (GDPR)",
                submit: "Send a Proposal"
            },
            privacy: "Your data is safe. We do not share it with third parties."
        },
        footer: {
            tagline: "Automation Architects for Business Efficiency",
            links: {
                title: "Quick Links"
            },
            legal: {
                title: "Legal",
                terms: "Terms of Service",
                privacy: "Privacy Policy"
            },
            newsletter: {
                title: "Newsletter",
                placeholder: "Your email",
                submit: "Subscribe"
            },
            copyright: "© 2024 ArciGy. All rights reserved."
        }
    },
    sk: {
        nav: {
            home: "Domov",
            about: "O nás",
            services: "Služby",
            pricing: "Cenník",
            contact: "Kontakt"
        },
        hero: {
            title: "Last step to business arc.",
            subtitle: "Identifikujeme a automatizujeme kľúčové firemné procesy—od generovania leadov a kontroly kvality po logistiku a interné operácie—pre odomknutie signifikantného rastu.",
            cta: {
                primary: "Diagnostika a Automatizácia",
                secondary: "Preskúmaj riešenia"
            }
        },
        problems: {
            title: "Kľúčové Firemné Problémy, Ktoré Riešime",
            card1: {
                title: "Neefektívny Tok Leadov",
                desc: "Manuálna kvalifikácia leadov vytvára úzke miesta a premárnené príležitosti vo vašom predajnom procese."
            },
            card2: {
                title: "Vysoké Prevádzkové Náklady",
                desc: "Opakujúce sa manuálne úlohy spotrebúvajú zdroje a bránia škálovaniu bez proporcionálneho zvýšenia nákladov."
            },
            card3: {
                title: "Nekonzistentná Kontrola Kvality",
                desc: "Ľudská chyba pri kontrolách kvality vedie k nekonzistenciám a nespokojnosti zákazníkov."
            }
        },
        
        process: {
            title: "Náš Proces",
            step1: {
                title: "Audit",
                desc: "Mapujeme vaše procesy a toky dát, aby sme odhalili slabé miesta."
            },
            step2: {
                title: "Analýza",
                desc: "Kvantifikujeme dopad a navrhneme optimálny prístup k automatizácii."
            },
            step3: {
                title: "Implementácia",
                desc: "Nasadzujeme inteligentné systémy a integrujeme ich do vašej technologickej sady."
            },
            step4: {
                title: "Optimalizácia",
                desc: "Monitorujeme, ladíme a rozširujeme automatizáciu pre neustály nárast návratnosti investícií (ROI)."
            }
        },
        services: {
            title: "Naše Automatizačné Riešenia",
            item1: {
                title: "Audit a Optimalizácia Procesov",
                desc: "Komplexná analýza vašich súčasných pracovných postupov na identifikáciu príležitostí pre automatizáciu a medzier v efektivite."
            },
            item2: {
                title: "Inteligentná Kvalifikácia a Správa Leadov",
                desc: "Automatizované systémy, ktoré hodnotia, smerujú a starajú sa o leady vo vašom predajnom lieviku s presnosťou."
            },
            item3: {
                title: "Automatizácia Dodávateľského Reťazca a Logistiky",
                desc: "Zefektívnite správu zásob, spracovanie objednávok a koordináciu dodávok pomocou inteligentnej automatizácie."
            },
            item4: {
                title: "Automatizované Kontroly Kvality",
                desc: "Konzistentná kontrola kvality prostredníctvom automatizovanej validácie, testovania a monitorovania súladu."
            },
            item5: {
                title: "Integrácia Inteligentných Asistentov",
                desc: "Nasadenie inteligentných hovorcových agentov a virtuálnych asistentov na spracovanie zákazníckych interakcií a interných úloh."
            },
            cta: "Dozvedieť sa viac o našich službách"
        },
        howitworks: {
            title: "Ako to Funguje",
            step1: {
                title: "Diagnostika",
                desc: "Analyzujeme vaše firemné procesy na identifikáciu neefektívností a príležitostí pre automatizáciu."
            },
            step2: {
                title: "Dizajn",
                desc: "Vytvárame vlastné automatizačné riešenia prispôsobené vašim špecifickým firemným potrebám a cieľom."
            },
            step3: {
                title: "Nasadenie",
                desc: "Implementujeme a monitorujeme vaše automatizačné systémy, zabezpečujúc plynulú integráciu a optimálny výkon."
            }
        },
        pricing: {
            title: "Cenníkové Plány",
            badge: "Najpopulárnejšie",
            period: "Vyžaduje Konzultáciu", // Placeholder, but won't be displayed
            tier1: {
                name: "Automatizačné Základy",
                feature1: "Základná automatizácia predaja a prevádzky (Väčšina)",
                feature2: "Audit procesov a návrh riešenia",
                feature3: "Štandardná integrácia (max. 2 systémy)",
                feature4: "Mesačné prehľady výkonu",
                feature5: "AI Audity (Menšinová Služba)",
                cta: "Dohodnite si Stretnutie"
            },
            tier2: {
                name: "Architekt Rastu",
                feature1: "Komplexná automatizácia kritických procesov (Väčšina)",
                feature2: "Riešenie pre riadenie logistiky a predaja",
                feature3: "Prioritná podpora a optimalizácia",
                feature4: "Vlastné integrácie (až 5 systémov)",
                feature5: "AI Webstránky / Predajné lieviky (Menšinová Služba)",
                cta: "Dohodnite si Stretnutie"
            },
            tier3: {
                name: "Enterprise na Mieru",
                feature1: "Plná integrácia a optimalizácia viacerých systémov (Väčšina)",
                feature2: "Dedikovaný tím pre automatizáciu (24/7 Monitoring)",
                feature3: "Pokročilá analytika a BI nástroje",
                feature4: "Vlastné podnikové balíčky a bezpečnosť",
                feature5: "AI Zamestnanci (Menšinová Služba)",
                cta: "Dohodnite si Stretnutie"
            },
            cta: "Dohodnite si Stretnutie",
            note: "Všetky plány vyžadujú podrobnú konzultáciu na určenie rozsahu a presnej mesačnej investície.",
            cta: "Dohodnite si Stretnutie"
        },
        aboutpreview: {
            title: "O ArciGy",
            text: "Sme architekti automatizácie venovaní riešeniu systémových firemných problémov prostredníctvom inteligentnej automatizácie. Našou misiou je pomôcť firmám dosiahnuť predvídateľný rast identifikáciou a automatizáciou kľúčových procesov, ktoré poháňajú efektivitu a škálovateľnosť.",
            cta: "Dozvedieť sa viac o ArciGy"
        },
        contact: {
            title: "Začnite Ešte Dnes",
            form: {
                forename: "Meno",
                surname: "Priezvisko",
                company: "Spoločnosť",
                email: "Email",
                phone: "Telefón",
                summary: "Zhrnutie projektu (zamerajte sa na problém, ktorý potrebujete vyriešiť)",
                newsletter: "Chcem dostávať newsletter",
                gdpr: "Súhlasím so spracovaním osobných údajov (GDPR)",
                submit: "Odoslať návrh"
            },
            privacy: "Vaše údaje sú bezpečné. Nepreposielame ich tretím stranám."
        },
        footer: {
            tagline: "Architekti Automatizácie pre Firemnú Efektivitu",
            links: {
                title: "Rýchle odkazy"
            },
            legal: {
                title: "Právne",
                terms: "Obchodné podmienky",
                privacy: "Zásady ochrany súkromia"
            },
            newsletter: {
                title: "Newsletter",
                placeholder: "Váš email",
                submit: "Prihlásiť sa"
            },
            copyright: "© 2024 ArciGy. Všetky práva vyhradené."
        },
        about: {
            hero: {
                title: "O ArciGy",
                subtitle: "Architekti Automatizácie pre Predvídateľný Rast"
            },
            story: {
                title: "Náš Príbeh",
                p1: "ArciGy bolo založené s jasnou misiou: pomôcť firmám odomknúť ich plný potenciál prostredníctvom inteligentnej automatizácie. Rozpoznali sme, že mnohé spoločnosti bojujú so systémovými neefektívnosťami, ktoré bránia rastu a škálovateľnosti.",
                p2: "Náš tím automatizačných architektov kombinuje hlbokú technickú odbornosť s obchodnou zručnosťou na identifikáciu a riešenie kľúčových prevádzkových výziev. Neimplementujeme len technológiu—prepracovávame procesy pre maximálnu efektivitu.",
                p3: "Dnes pracujeme s firmami naprieč odvetviami, od výroby po služby, pomáhajúc im dosiahnuť predvídateľný rast prostredníctvom stratégickej automatizácie."
            },
            mission: {
                title: "Naša Misia",
                text: "Automatizácia pre Predvídateľný Rast. Veríme, že každá firma si zaslúži fungovať na špičkovej efektivite. Našou misiou je identifikovať systémové problémy a riešiť ich prostredníctvom inteligentnej automatizácie, umožňujúc našim klientom škálovať bez proporcionálneho zvýšenia nákladov."
            },
            values: {
                title: "Naše Hodnoty",
                precision: {
                    title: "Presnosť",
                    desc: "Každé automatizačné riešenie je dôkladne navrhnuté a otestované na zabezpečenie spoľahlivosti a presnosti."
                },
                scalability: {
                    title: "Škálovateľnosť",
                    desc: "Staviame systémy, ktoré rastú s vašou firmou, nie také, ktoré potrebujú neustále prepracovanie."
                },
                innovation: {
                    title: "Inovácia",
                    desc: "Zostávame v popredí automatizačnej technológie na poskytovanie najmodernejších riešení."
                },
                partnership: {
                    title: "Partnerstvo",
                    desc: "Váš úspech je náš úspech. Pracujeme ako rozšírenie vášho tímu, nie len ako dodávateľ."
                }
            },
            team: {
                title: "Náš Tím",
                intro: "Náš tím pozostáva z automatizačných architektov, procesných inžinierov a obchodných analytikov, ktorí spolupracujú na poskytovaní výnimočných výsledkov.",
                role1: {
                    title: "Automatizační Architekti",
                    desc: "Navrhujú a implementujú inteligentné automatizačné systémy pre firemných klientov."
                },
                role2: {
                    title: "Procesní Inžinieri",
                    desc: "Analyzujú firemné procesy a identifikujú príležitosti pre automatizáciu."
                },
                role3: {
                    title: "Obchodný Analytik",
                    desc: "Spájajte medzeru medzi firemnými požiadavkami a technickými riešeniami."
                }
            },
        },
        servicespage: {
            hero: {
                title: "Naše Služby",
                subtitle: "Komplexné Riešenia Pre Automatizáciu Podnikania"
            },
            category1: {
                title: "Automatizácia Predaja a Marketingu",
                desc: "Transformujte svoje predajné a marketingové procesy pomocou inteligentnej automatizácie, ktorá kvalifikuje leady, stará sa o potenciálnych zákazníkov a optimalizuje konverzné miery."
            },
            category2: {
                title: "Prevádzková Efektivita",
                desc: "Zefektívnite interné operácie, znížte manuálnu prácu a odstráňte úzke miesta prostredníctvom automatizácie procesov."
            },
            category3: {
                title: "Dodávateľský Reťazec a Logistika",
                desc: "Optimalizujte správu zásob, spracovanie objednávok a koordináciu dodávok pomocou inteligentných automatizačných systémov."
            },
            flow: {
                title: "Ukážka Automatizačného Toku",
                item1: "Automatizovaný zber leadov z viacerých kanálov",
                item2: "Inteligentné hodnotenie a kvalifikácia leadov",
                item3: "Automatizované smerovanie na príslušný predajný tím",
                item4: "Sekvencie sledovania a kampane starostlivosti",
                item5: "Sledovanie výkonnosti a optimalizácia"
            },
            flow2: {
                item1: "Audit procesov a identifikácia úzkych miest",
                item2: "Prepracovanie a optimalizácia pracovných postupov",
                item3: "Automatizované priradenie a sledovanie úloh",
                item4: "Integrácia so súčasnými systémami",
                item5: "Neustále monitorovanie a zlepšovanie"
            },
            flow3: {
                item1: "Automatizované monitorovanie zásob a upozornenia",
                item2: "Automatizácia spracovania a plnenia objednávok",
                item3: "Plánovanie a sledovanie dodávok",
                item4: "Automatizácia komunikácie so dodávateľmi",
                item5: "Správy a analýzy v reálnom čase"
            },
            cta: {
                title: "Ste Pripravení Automatizovať Svoju Firmu?",
                text: "Požiadajte o konzultáciu a zistite, ako môže automatizácia transformovať vaše operácie.",
                button: "Vyžiadať Konzultáciu"
            }
        },
        pricingpage: {
            hero: {
                title: "Cenníkové Plány",
                subtitle: "Vyberte si automatizačné riešenie, ktoré vyhovuje vašim firemným potrebám"
            },
            toggle: {
                monthly: "Mesačne",
                annual: "Ročne"
            },
            enterprise: {
                cta: "Dohodnite si Stretnutie"
            }
        },
        contactpage: {
            hero: {
                title: "Začnite Ešte Dnes",
                subtitle: "Poďme diskutovať o tom, ako môže automatizácia transformovať vašu firmu"
            }
        }
    }
};

// Add additional page translations to English
translations.en.about = {
    hero: {
        title: "About ArciGy",
        subtitle: "Automation Architects for Predictable Growth"
    },
    story: {
        title: "Our Story",
        p1: "ArciGy was founded with a clear mission: to help businesses unlock their full potential through intelligent automation. We recognized that many companies struggle with systemic inefficiencies that prevent growth and scalability.",
        p2: "Our team of automation architects combines deep technical expertise with business acumen to identify and solve core operational challenges. We don't just implement technology—we redesign processes for maximum efficiency.",
        p3: "Today, we work with businesses across industries, from manufacturing to services, helping them achieve predictable growth through strategic automation."
    },
    mission: {
        title: "Our Mission",
        text: "Automation for Predictable Growth. We believe that every business deserves to operate at peak efficiency. Our mission is to identify systemic problems and solve them through intelligent automation, enabling our clients to scale without proportional cost increases."
    },
    values: {
        title: "Our Values",
        precision: {
            title: "Precision",
            desc: "Every automation solution is meticulously designed and tested to ensure reliability and accuracy."
        },
        scalability: {
            title: "Scalability",
            desc: "We build systems that grow with your business, not ones that need constant rework."
        },
        innovation: {
            title: "Innovation",
            desc: "We stay at the forefront of automation technology to deliver cutting-edge solutions."
        },
        partnership: {
            title: "Partnership",
            desc: "Your success is our success. We work as an extension of your team, not just a vendor."
        }
    },
    team: {
        title: "Our Team",
        intro: "Our team consists of automation architects, process engineers, and business analysts who work together to deliver exceptional results.",
        role1: {
            title: "Automation Architects",
            desc: "Design and implement intelligent automation systems tailored to your business needs."
        },
        role2: {
            title: "Process Engineers",
            desc: "Analyze and optimize workflows to identify automation opportunities."
        },
        role3: {
            title: "Business Analysts",
            desc: "Bridge the gap between business requirements and technical solutions."
        }
    }
};

translations.en.servicespage = {
    hero: {
        title: "Our Services",
        subtitle: "Comprehensive Business Automation Solutions"
    },
    category1: {
        title: "Sales & Marketing Automation",
        desc: "Transform your sales and marketing processes with intelligent automation that qualifies leads, nurtures prospects, and optimizes conversion rates."
    },
    category2: {
        title: "Operational Efficiency",
        desc: "Streamline internal operations, reduce manual work, and eliminate bottlenecks through process automation."
    },
    category3: {
        title: "Supply Chain & Logistics",
        desc: "Optimize inventory management, order processing, and delivery coordination with smart automation systems."
    },
    flow: {
        title: "Sample Automation Flow",
        item1: "Automated lead capture from multiple channels",
        item2: "Intelligent lead scoring and qualification",
        item3: "Automated routing to appropriate sales team",
        item4: "Follow-up sequences and nurturing campaigns",
        item5: "Performance tracking and optimization"
    },
    flow2: {
        item1: "Process audit and bottleneck identification",
        item2: "Workflow redesign and optimization",
        item3: "Automated task assignment and tracking",
        item4: "Integration with existing systems",
        item5: "Continuous monitoring and improvement"
    },
    flow3: {
        item1: "Automated inventory monitoring and alerts",
        item2: "Order processing and fulfillment automation",
        item3: "Delivery scheduling and tracking",
        item4: "Supplier communication automation",
        item5: "Real-time reporting and analytics"
    },
    cta: {
        title: "Ready to Automate Your Business?",
        text: "Request a consultation to discover how automation can transform your operations.",
        button: "Request Consultation"
    }
};

translations.en.pricingpage = {
    hero: {
        title: "Pricing Plans",
        subtitle: "Choose the automation solution that fits your business needs"
    },
    toggle: {
        monthly: "Monthly",
        annual: "Annual"
    },
    enterprise: {
        cta: "Schedule Meeting"
    }
};

translations.en.contactpage = {
    hero: {
        title: "Get Started Today",
        subtitle: "Let's discuss how automation can transform your business"
    }
};


// Current Language
let currentLang = localStorage.getItem('language') || 'en';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initIntroOverlay();
    initLanguage();
    initNavigation();
    initAnimations();
    initCursorParallax();
    // initHeroParticles();
    initSectionParallax();
    initForms();
    setTimezone();

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * DPR);
        canvas.height = Math.floor(height * DPR);
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

});

/* function initHeroParticles() {
    if (window.__globalParticlesActive) return; // avoid double layers
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const colors = ['#7AF1FF', '#8B63FF', '#FF6FD8'];
    const PCOUNT = 48;
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * DPR);
        canvas.height = Math.floor(height * DPR);
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    function init() {
        particles = Array.from({ length: PCOUNT }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 2 + 0.6,
            c: colors[Math.floor(Math.random() * colors.length)]
        }));
    }
    function step() {
        ctx.clearRect(0, 0, width, height);
        // draw connections
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const d = Math.hypot(dx, dy);
                if (d < 120) {
                    const alpha = 1 - d / 120;
                    ctx.strokeStyle = `rgba(138, 99, 255, ${alpha * 0.25})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        }
        // draw particles
        for (const p of particles) {
            ctx.fillStyle = p.c;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -20) p.x = width + 20;
            if (p.x > width + 20) p.x = -20;
            if (p.y < -20) p.y = height + 20;
            if (p.y > height + 20) p.y = -20;
        }
        requestAnimationFrame(step);
    }
    resize();
    init();
    step();
    window.addEventListener('resize', () => {
        resize();
        init();
    });
    window.__globalParticlesActive = true; // Prevent double initialization
} */

// Language Toggle
function initLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        
        for (let k of keys) {
            value = value?.[k];
        }
        
        if (value) {
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = value;
            } else {
                el.textContent = value;
            }
        }
    });
    
    // Update meta title
    if (lang === 'sk') {
        document.title = 'ArciGy — Automatizácia Procesov | Architekti Efektivity';
    } else {
        document.title = 'ArciGy — Business Process Automation | Efficiency Architects';
    }

    // --- Calendar Language Sync ---
    // If the calendar has been opened, re-render it to reflect the new language
    if (window.arcigyCalendar && typeof window.arcigyCalendar.updateLanguage === 'function') {
        window.arcigyCalendar.updateLanguage(lang);
    }
}

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close menu on link click (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Sticky navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(5, 8, 18, 0.95)';
            } else {
                navbar.style.background = 'rgba(5, 8, 18, 0.8)';
            }
        });
    }
}

// Scroll Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Remove visible class when out of view to re-trigger animation
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.problem-card, .service-item, .process-step, .pricing-card, .testimonial-card, .value-card, .team-card, .blog-card, .position-card, .step-card').forEach(el => {
        observer.observe(el);
    });
    
    // Removed scroll-based parallax for hero shapes (to keep visuals static on scroll)
}

// Section parallax updater (perf-safe with rAF)
function initSectionParallax() {
    // Disable background parallax on scroll; keep background static
    document.documentElement.style.setProperty('--bg-parallax', `0px`);
}

// Cursor parallax for gradients
function initCursorParallax() {
    const root = document.documentElement;
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40; // -20..20
        const y = (e.clientY / window.innerHeight - 0.5) * 40; // -20..20
        root.style.setProperty('--parallax-x', `${x}px`);
        root.style.setProperty('--parallax-y', `${y}px`);
    });
}

// Subtle particle network in hero
/* function initHeroParticles() {
    if (window.__globalParticlesActive) return; // avoid double layers
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const colors = ['#7AF1FF', '#8B63FF', '#FF6FD8'];
    const PCOUNT = 48;
    function resize() {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = Math.floor(width * DPR);
        canvas.height = Math.floor(height * DPR);
        ctx.scale(DPR, DPR);
    }
    function init() {
        particles = Array.from({ length: PCOUNT }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 2 + 0.6,
            c: colors[Math.floor(Math.random() * colors.length)]
        }));
    }
    function step() {
        ctx.clearRect(0, 0, width, height);
        // draw connections
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const d = Math.hypot(dx, dy);
                if (d < 120) {
                    const alpha = 1 - d / 120;
                    ctx.strokeStyle = `rgba(138, 99, 255, ${alpha * 0.25})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        }
        // draw particles
        for (const p of particles) {
            ctx.fillStyle = p.c;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -20) p.x = width + 20;
            if (p.x > width + 20) p.x = -20;
            if (p.y < -20) p.y = height + 20;
            if (p.y > height + 20) p.y = -20;
        }
        requestAnimationFrame(step);
    }
    resize();
    init();
    step();
    window.addEventListener('resize', () => {
        resize();
        init();
    });
} */

// Global particle background across the entire site
/* function initGlobalParticles() {
    if (window.__globalParticlesActive) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'globalParticles';
    canvas.style.cssText = 'position:fixed;inset:0;z-index:-3;pointer-events:none;opacity:0.28;filter:blur(0.15px);';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    window.__globalParticlesActive = true;
    let width, height, particles;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const colors = ['#7AF1FF', '#8B63FF', '#FF6FD8'];
    const PCOUNT = Math.max(64, Math.floor((window.innerWidth * window.innerHeight) / 25000));
    function resize() {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = Math.floor(width * DPR);
        canvas.height = Math.floor(height * DPR);
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    function init() {
        particles = Array.from({ length: PCOUNT }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.8 + 0.5,
            c: colors[Math.floor(Math.random() * colors.length)]
        }));
    }
    function step() {
        ctx.clearRect(0, 0, width, height);
        // gentle connections
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const d = Math.hypot(dx, dy);
                if (d < 110) {
                    const alpha = 1 - d / 110;
                    ctx.strokeStyle = `rgba(122, 241, 255, ${alpha * 0.18})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        }
        // particles
        for (const p of particles) {
            ctx.fillStyle = p.c;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -20) p.x = width + 20;
            if (p.x > width + 20) p.x = -20;
            if (p.y < -20) p.y = height + 20;
            if (p.y > height + 20) p.y = -20;
        }
        requestAnimationFrame(step);
    }
    resize();
    init();
    step();
    window.addEventListener('resize', () => {
        resize();
        init();
    });
} */

// Forms
function initForms() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const emailForm = document.getElementById('emailForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Add timezone and language info
            try {
                data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            } catch(e) {
                data.timezone = 'Europe/Bratislava';
            }
            data.language = currentLang;

            const webhookUrl = new URL('https://n8n.srv1118451.hstgr.cloud/webhook-test/c67d2d9c-9c97-4e89-990a-633171bebe19');
            Object.keys(data).forEach(key => webhookUrl.searchParams.append(key, data[key]));

            fetch(webhookUrl, {
                method: 'GET'
            })
            .then(response => {
                if (response.ok) {
                    alert(currentLang === 'sk' ? 'Ďakujeme za váš záujem! Čoskoro vás budeme kontaktovať.' : 'Thank you for your interest! We will contact you soon.');
                    contactForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(currentLang === 'sk' ? 'Došlo k chybe. Skúste to prosím neskôr.' : 'An error occurred. Please try again later.');
            });
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            // Here you would normally send the email to a server
            alert(currentLang === 'sk' ? 'Ďakujeme za prihlásenie sa!' : 'Thank you for subscribing!');
            newsletterForm.reset();
        });
    }
    
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(emailForm);
            const data = Object.fromEntries(formData.entries());
            
            // Add timezone and language info
            try {
                data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            } catch(e) {
                data.timezone = 'Europe/Bratislava';
            }
            data.language = currentLang;

            const webhookUrl = new URL('https://n8n.srv1118451.hstgr.cloud/webhook-test/71b23cfc-169d-45c6-803d-7229dccf6a04');
            Object.keys(data).forEach(key => webhookUrl.searchParams.append(key, data[key]));

            fetch(webhookUrl, {
                method: 'GET'
            })
            .then(response => {
                if (response.ok) {
                    alert(currentLang === 'sk' ? 'Ďakujeme za váš email! Čoskoro vás budeme kontaktovať.' : 'Thank you for your email! We will contact you soon.');
                    emailForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(currentLang === 'sk' ? 'Došlo k chybe. Skúste to prosím neskôr.' : 'An error occurred. Please try again later.');
            });
        });
    }
}

// Set Timezone
function setTimezone() {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // Default to Europe/Bratislava if not detected
        const defaultTz = 'Europe/Bratislava';
        // You can use this timezone info when submitting forms
        console.log('Timezone:', timezone || defaultTz);
    } catch (e) {
        console.log('Timezone: Europe/Bratislava (default)');
    }
}



// Intro Overlay Logic
function initIntroOverlay() {
    const overlay = document.getElementById('Intro_Overlay');
    if (!overlay) return;

    // Check session
    const hasSeenIntro = sessionStorage.getItem('introShown');
    if (hasSeenIntro === 'true') {
        overlay.style.display = 'none';
        return;
    }

    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Animation Sequence
    // 0s: Start (overlay is visible, parts are opacity: 0)

    // Beat 1: Text Fade In (Start at 0.5s)
    setTimeout(() => {
        const textPaths = overlay.querySelectorAll('.path-text');
        textPaths.forEach((path, index) => {
             // Stagger slightly for effect if desired, but request says "Target all elements... Fade them in"
             // We'll add the class directly.
             path.classList.add('anim-text');
        });
    }, 200);

    // Beat 2: Left Bracket (Start at 1.5s -> 0.6s)
    setTimeout(() => {
        const leftBracket = overlay.querySelector('.path-symbol-left');
        if (leftBracket) leftBracket.classList.add('anim-symbol');
    }, 600);

    // Beat 3: Slash (Start at 2.0s -> 0.8s)
    setTimeout(() => {
        const slash = overlay.querySelector('.path-symbol-slash');
        if (slash) slash.classList.add('anim-symbol');
    }, 800);

    // Beat 4: Right Bracket (Start at 2.5s -> 1.0s)
    setTimeout(() => {
        const rightBracket = overlay.querySelector('.path-symbol-right');
        if (rightBracket) rightBracket.classList.add('anim-symbol');
    }, 1000);

    // End: Fade Out (Start at 4.0s -> 1.5s)
    setTimeout(() => {
        overlay.classList.add('fade-out');
        document.body.style.overflow = ''; // Unlock scroll
        
        // Mark session
        sessionStorage.setItem('introShown', 'true');

        // Remove from DOM after transition
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }, 1500);
}
