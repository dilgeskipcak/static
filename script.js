/* script.js */

const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımızda",
        nav_products: "Koleksiyon",
        hero_title: "Modern Çağ İçin Minimalist Tasarım.",
        hero_text: "Modaya yön veren çizgiler ve modern dokunuşlar. Sizin için en iyisini tasarlıyoruz.",
        hero_btn: "Koleksiyonu İncele",
        about_title: "Felsefemiz",
        about_sub1: "İşçilik & Detay",
        about_text1: " Her dikişte kaliteyi hissedin. Detaylara verdiğimiz önem, bizi biz yapan en büyük değerdir.",
        about_text2: "Sürdürülebilir kumaşlar ve etik üretim anlayışı ile modaya yeni bir soluk getiriyoruz.",
        about_sub2: "Sürdürülebilirlik",
        about_text3: "Gelecek nesiller için doğaya saygılı üretim süreçlerini benimsiyoruz.",
        prod_title: "SS/24 Koleksiyonu",
        prod_subtitle: "En yeni tasarımlarımızı keşfedin. Zarif ve zamansız parçalar.",
        prod_1: "Keten Ceket",
        prod_2: "Oxford Gömlek",
        prod_3: "İpek Elbise",
        prod_4: "Yün Pantolon",
        footer: "© 2026 Sandline Design Co. Tüm hakları saklıdır. | info@sand-line.com"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_products: "Products",
        hero_title: "Minimalist Design for the Modern Era.",
        hero_text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        hero_btn: "View Collection",
        about_title: "Our Philosophy",
        about_sub1: "Craftsmanship & Detail",
        about_text1: "Quality in every stitch.",
        about_text2: "We bring a new breath to fashion with sustainable fabrics and ethical production.",
        about_sub2: "Sustainability",
        about_text3: "We adopt eco-friendly production processes for future generations.",
        prod_title: "SS/24 Collection",
        prod_subtitle: "Explore our latest tailored pieces. Elegant and timeless.",
        prod_1: "The Linen Jacket",
        prod_2: "Oxford Shirt",
        prod_3: "Evening Silk",
        prod_4: "Wool Trousers",
        footer: "© 2026 Sandline Design Co. All rights reserved. | info@sand-line.com"
    },
    nl: {
        nav_home: "Home",
        nav_about: "Over Ons",
        nav_products: "Collectie",
        hero_title: "Minimalistisch Design voor het Moderne Tijdperk.",
        hero_text: "modieuze lijnen en moderne accenten. Wij ontwerpen het beste voor u.",
        hero_btn: "Bekijk Collectie",
        about_title: "Onze Filosofie",
        about_sub1: "Vakmanschap & Detail",
        about_text1: " Voel de kwaliteit in elke steek. Oog voor detail is onze grootste waarde.",
        about_text2: "We brengen een nieuwe wind in de mode met duurzame stoffen en ethische productie.",
        about_sub2: "Duurzaamheid",
        about_text3: "We hanteren milieuvriendelijke productieprocessen voor toekomstige generaties.",
        prod_title: "SS/24 Collectie",
        prod_subtitle: "Ontdek onze nieuwste ontwerpen. Elegante en tijdloze stukken.",
        prod_1: "Linnen Jasje",
        prod_2: "Oxford Overhemd",
        prod_3: "Zijden Jurk",
        prod_4: "Wollen Pantalon",
        footer: "© 2026 Sandline Design Co. Alle rechten voorbehouden. | info@sand-line.com"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Active Link Underline
    const path = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });

    // 2. Handle Language Switching
    const langSelector = document.getElementById('lang-switch');
    
    // Check localStorage or default to 'tr'
    const currentLang = localStorage.getItem('site-lang') || 'tr';
    
    // Set dropdown value
    if(langSelector) {
        langSelector.value = currentLang;
        
        // Event Listener for change
        langSelector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            setLanguage(selectedLang);
            localStorage.setItem('site-lang', selectedLang);
        });
    }

    // Apply language on load
    setLanguage(currentLang);
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}