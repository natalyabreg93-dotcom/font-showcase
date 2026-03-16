document.addEventListener("DOMContentLoaded", function() {
    // 1. ЗАГРУЗКА БАЗЫ ПРОДУКТОВ ДЛЯ ПОИСКА
    const script = document.createElement('script');
    script.src = '/products.js';
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. ГЕНЕРАЦИЯ ПОЛНОГО МЕНЮ (Все 22+ страницы и подразделы)
    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts ▾</button>
                    <div class="dropdown-content">
                        <a href="/page1.html">Script Fonts</a>
                        <a href="/page2.html">Serif Fonts</a>
                        <a href="/page3.html">Retro Fonts</a>
                        <a href="/page4.html">Minimal Fonts</a>
                        <a href="/page5.html">Gothic Fonts</a>
                        <a href="/page6.html">Wedding Fonts</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Stickers & Papers ▾</button>
                    <div class="dropdown-content">
                        <a href="/page11.html" style="font-weight:bold; border-bottom:1px solid #eee;">Planner Stickers Hub</a>
                        <a href="/page11.html#floral-stickers">↳ Floral Stickers</a>
                        <a href="/page11.html#self-care-stickers">↳ Quotes & Self Care</a>
                        <a href="/page11.html#holiday-stickers">↳ Holiday Stickers</a>
                        <a href="/page11.html#animal-stickers">↳ Animal Stickers</a>
                        <a href="/page11.html#food-stickers">↳ Food & Drink</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="/page12.html">Digital Paper Packs</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Business & Canva ▾</button>
                    <div class="dropdown-content">
                        <a href="/page13.html" style="font-weight:bold; border-bottom:1px solid #eee;">Branding Kits</a>
                        <a href="/page13.html#minimalist-logos">↳ Minimalist Logos</a>
                        <a href="/page13.html#beauty-logos">↳ Beauty Logos</a>
                        <a href="/page13.html#business-cards">↳ Business Cards</a>
                        <a href="/page13.html#menu-templates">↳ Menu Templates</a>
                        <a href="/page13.html#flyer-templates">↳ Flyer Templates</a>
                        <a href="/page13.html#resume-templates">↳ Resumes & CV</a>
                        <a href="/page13.html#certificate-templates">↳ Certificates</a>
                        <a href="/page13.html#invoice-templates">↳ Invoice Templates</a>
                        <a href="/page13.html#brochure-templates">↳ Presentations</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="/page7.html">Social Media Kits</a>
                        <a href="/page20.html">YouTube Assets</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Graphics & POD ▾</button>
                    <div class="dropdown-content">
                        <a href="/page8.html">KDP Interiors</a>
                        <a href="/page9.html">SVG Cut Files</a>
                        <a href="/page15.html">Tumbler Wraps</a>
                        <a href="/page16.html">Retro T-Shirt Designs</a>
                        <a href="/page19.html">Laser Cut Files</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Coloring & Crafts ▾</button>
                    <div class="dropdown-content">
                        <a href="/page10.html" style="font-weight:bold; border-bottom:1px solid #eee;">Coloring Library</a>
                        <a href="/page10.html#kids-coloring">↳ Kids Coloring</a>
                        <a href="/page10.html#kids-animal-coloring">↳ Animal Coloring</a>
                        <a href="/page10.html#adult-coloring">↳ Mandala & Zen</a>
                        <a href="/page10.html#fantasy-creatures">↳ Fantasy Creatures</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="/page14.html">Crochet Patterns</a>
                        <a href="/page17.html">Greeting Cards</a>
                        <a href="/page18.html">DIY Gift Boxes</a>
                        <a href="/page21.html">Paper Flowers</a>
                        <a href="/page22.html">Machine Embroidery</a>
                    </div>
                </div>

                <div class="search-box" style="position: relative;">
                    <input type="text" class="search-input" placeholder="Search 1,000+ items...">
                    <div class="search-results"></div>
                </div>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(p => p.innerHTML = menuHTML);

    // 3. ЛОГИКА ИНТЕРАКТИВНОГО ПОИСКА
    window.fillSearch = function(text) {
        const inputs = document.querySelectorAll('.search-input');
        inputs.forEach(input => {
            input.value = text;
            input.dispatchEvent(new Event('input'));
        });
    };

    setTimeout(() => {
        document.querySelectorAll('.search-box').forEach(container => {
            const input = container.querySelector('.search-input');
            const resultsBox = container.querySelector('.search-results');

            input.addEventListener('focus', () => {
                if (input.value.trim() === "") showSearchExample(resultsBox);
            });

            input.addEventListener('input', function(e) {
                const query = e.target.value.trim();
                if (query.length < 2) { 
                    showSearchExample(resultsBox); 
                    return; 
                }
                if (typeof filterProducts !== 'undefined') {
                    const results = filterProducts(query);
                    displayResults(results, resultsBox);
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-box')) {
                document.querySelectorAll('.search-results').forEach(box => box.style.display = 'none');
            }
        });

        initGlobalFreebies();
        initBackToTop();
    }, 500);

    function showSearchExample(container) {
        container.innerHTML = `
            <div style="padding: 15px; background: #fff; border-radius: 8px;">
                <p style="margin: 0 0 10px; font-weight: bold; color: #555; font-size: 0.9rem;">Try searching for:</p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <span style="background: #f0f0f0; padding: 4px 12px; border-radius: 15px; cursor: pointer; font-size: 0.8rem;" onclick="fillSearch('Mandala')">Mandala</span>
                    <span style="background: #f0f0f0; padding: 4px 12px; border-radius: 15px; cursor: pointer; font-size: 0.8rem;" onclick="fillSearch('Coffee')">Coffee</span>
                    <span style="background: #f0f0f0; padding: 4px 12px; border-radius: 15px; cursor: pointer; font-size: 0.8rem;" onclick="fillSearch('Dragon')">Dragon</span>
                    <span style="background: #f0f0f0; padding: 4px 12px; border-radius: 15px; cursor: pointer; font-size: 0.8rem;" onclick="fillSearch('Logo')">Logo</span>
                </div>
            </div>
        `;
        container.style.display = 'block';
    }

    function displayResults(results, container) {
        if (results.length === 0) {
            container.innerHTML = '<div style="padding:15px; color:#888;">No products found</div>';
        } else {
            container.innerHTML = results.slice(0, 8).map(item => `
                <a href="${item.link}" class="search-item" style="display: flex; align-items: center; gap: 12px; padding: 10px; text-decoration: none; border-bottom: 1px solid #eee;">
                    <img src="${item.img}" style="width: 45px; height: 45px; border-radius: 6px; object-fit: cover;">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: bold; color: #333; font-size: 0.85rem;">${item.name}</span>
                        <span style="color: #ff477e; font-size: 0.75rem;">${item.category}</span>
                    </div>
                </a>
            `).join('');
        }
        container.style.display = 'block';
    }

    // 4. ПОДАРКИ И БАННЕР-ПОМОЩНИК В САЙДБАРЕ
    const freebieData = [
        { title: "Daily Free Gifts", img: "image/gift-daily.jpg", link: "https://www.creativefabrica.com/daily-gifts/ref/10996753/" },
        { title: "Free Fonts Pack", img: "image/gift-font.jpg", link: "https://www.creativefabrica.com/freebies/free-fonts/ref/10996753/" },
        { title: "Free Graphics", img: "image/gift-graphic.jpg", link: "https://www.creativefabrica.com/freebies/free-graphics/ref/10996753/" }
    ];
    let giftIndex = 0;

    function initGlobalFreebies() {
        const sidebar = document.querySelector('aside.sidebar');
        if (!sidebar) return; 

        // Правка надписи в сайдбаре (с 24+ на 50+)
        const sidebarLinkText = sidebar.querySelector('.banner-container p');
        if (sidebarLinkText && sidebarLinkText.innerText.includes('24+')) {
            sidebarLinkText.innerHTML = '← View All 50+ Categories';
        }

        const giftWrapper = document.createElement('div');
        giftWrapper.innerHTML = `
            <div class="banner-container" style="border: 2px dashed #ff477e; background: #fffafb; padding: 10px; border-radius: 12px; margin-bottom: 20px;">
                <h3 style="color: #ff477e; text-align: center; font-size: 1.1rem; margin-top: 0;">🎁 TODAY'S FREEBIES</h3>
                <div id="daily-gift-box" style="transition: opacity 0.5s ease; min-height: 140px;"></div>
            </div>
        `;
        sidebar.prepend(giftWrapper);

        // Баннер-стрелка "Can't find something?"
        const searchArrow = document.createElement('div');
        searchArrow.innerHTML = `
            <div class="banner-container" style="margin-top: 25px; text-align: center;">
                <p style="font-weight: bold; color: #ff477e; margin-bottom: 10px; font-size: 0.95rem;">Can't find something?</p>
                <a href="#" onclick="document.querySelector('.search-input').focus(); return false;">
                    <img src="image/search-arrow.jpg" alt="Search our library" style="width: 100%; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: 0.3s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
                </a>
            </div>
        `;
        giftWrapper.after(searchArrow);

        updateDailyGift();
        setInterval(updateDailyGift, 5000);
    }

    function updateDailyGift() {
        const box = document.getElementById('daily-gift-box');
        if (!box) return;
        const gift = freebieData[giftIndex];
        box.style.opacity = '0';
        setTimeout(() => {
            box.innerHTML = `
                <a href="${gift.link}" target="_blank" style="text-decoration: none; display: block;">
                    <img src="${gift.img}" alt="${gift.title}" style="width: 100%; border-radius: 8px;">
                    <div style="background: #ff477e; color: white; padding: 8px; border-radius: 0 0 8px 8px; font-weight: bold; text-align: center; font-size: 0.85rem;">
                        ${gift.title} ➔
                    </div>
                </a>
            `;
            box.style.opacity = '1';
            giftIndex = (giftIndex + 1) % freebieData.length;
        }, 500);
    }

    // 5. КНОПКА "НАВЕРХ"
    function initBackToTop() {
        const btn = document.createElement('button');
        btn.innerHTML = '↑';
        btn.id = 'backToTopBtn';
        
        Object.assign(btn.style, {
            display: 'none',
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: '1000',
            border: 'none',
            outline: 'none',
            backgroundColor: '#ff477e',
            color: 'white',
            cursor: 'pointer',
            padding: '15px 18px',
            borderRadius: '50%',
            fontSize: '22px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(255, 71, 126, 0.4)',
            transition: '0.3s'
        });

        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });

        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
