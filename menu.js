document.addEventListener("DOMContentLoaded", function() {
    // 1. Загрузка базы продуктов
    const script = document.createElement('script');
    script.src = '/products.js';
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. Генерация полного HTML-кода меню
    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts ▾</button>
                    <div class="dropdown-content">
                        <a href="/page1.html" class="${currentPath === 'page1.html' ? 'active' : ''}">Script Fonts</a>
                        <a href="/page2.html" class="${currentPath === 'page2.html' ? 'active' : ''}">Serif Fonts</a>
                        <a href="/page3.html" class="${currentPath === 'page3.html' ? 'active' : ''}">Retro Fonts</a>
                        <a href="/page4.html" class="${currentPath === 'page4.html' ? 'active' : ''}">Minimal Fonts</a>
                        <a href="/page5.html" class="${currentPath === 'page5.html' ? 'active' : ''}">Gothic Fonts</a>
                        <a href="/page6.html" class="${currentPath === 'page6.html' ? 'active' : ''}">Wedding Fonts</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Stickers & Papers ▾</button>
                    <div class="dropdown-content">
                        <a href="/page11.html" class="${currentPath === 'page11.html' ? 'active' : ''}" style="font-weight: bold; border-bottom: 1px solid #eee;">Stickers Hub</a>
                        <a href="/page11.html#floral-stickers">↳ Floral Stickers</a>
                        <a href="/page11.html#self-care-stickers">↳ Quotes & Self Care</a>
                        <a href="/page11.html#holiday-stickers">↳ Holiday Stickers</a>
                        <a href="/page11.html#animal-stickers">↳ Animal Stickers</a>
                        <a href="/page11.html#food-stickers">↳ Food & Drink</a>
                        <div style="height: 1px; background: #eee; margin: 5px 0;"></div>
                        <a href="/page12.html" class="${currentPath === 'page12.html' ? 'active' : ''}">Digital Paper Packs</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Business & Canva ▾</button>
                    <div class="dropdown-content">
                        <a href="/page13.html" class="${currentPath === 'page13.html' ? 'active' : ''}" style="font-weight: bold; border-bottom: 1px solid #eee;">Branding Kits</a>
                        <a href="/page13.html#minimalist-logos">↳ Minimalist Logos</a>
                        <a href="/page13.html#beauty-logos">↳ Beauty Logos</a>
                        <a href="/page13.html#business-cards">↳ Business Cards</a>
                        <a href="/page13.html#menu-templates">↳ Menu Templates</a>
                        <a href="/page13.html#flyer-templates">↳ Flyer Templates</a>
                        <a href="/page13.html#resume-templates">↳ Resumes & CV</a>
                        <a href="/page13.html#certificate-templates">↳ Certificates</a>
                        <a href="/page13.html#invoice-templates">↳ Invoice Templates</a>
                        <a href="/page13.html#brochure-templates">↳ Presentations</a>
                        <div style="height: 1px; background: #eee; margin: 5px 0;"></div>
                        <a href="/page7.html" class="${currentPath === 'page7.html' ? 'active' : ''}">Social Media Kits</a>
                        <a href="/page20.html" class="${currentPath === 'page20.html' ? 'active' : ''}">YouTube Assets</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Graphics & POD ▾</button>
                    <div class="dropdown-content">
                        <a href="/page8.html" class="${currentPath === 'page8.html' ? 'active' : ''}">KDP Interiors</a>
                        <a href="/page9.html" class="${currentPath === 'page9.html' ? 'active' : ''}">SVG Cut Files</a>
                        <a href="/page15.html" class="${currentPath === 'page15.html' ? 'active' : ''}">Tumbler Wraps</a>
                        <a href="/page16.html" class="${currentPath === 'page16.html' ? 'active' : ''}">Retro T-Shirt Designs</a>
                        <a href="/page19.html" class="${currentPath === 'page19.html' ? 'active' : ''}">Laser Cut Files</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Coloring & Crafts ▾</button>
                    <div class="dropdown-content">
                        <a href="/page10.html" class="${currentPath === 'page10.html' ? 'active' : ''}" style="font-weight: bold; border-bottom: 1px solid #eee;">Coloring Library</a>
                        <a href="/page10.html#kids-coloring">↳ Kids Coloring</a>
                        <a href="/page10.html#kids-animal-coloring">↳ Animal Coloring</a>
                        <a href="/page10.html#adult-coloring">↳ Mandala & Zen</a>
                        <a href="/page10.html#fantasy-creatures">↳ Fantasy Creatures</a>
                        <div style="height: 1px; background: #eee; margin: 5px 0;"></div>
                        <a href="/page14.html" class="${currentPath === 'page14.html' ? 'active' : ''}">Crochet Patterns</a>
                        <a href="/page17.html" class="${currentPath === 'page17.html' ? 'active' : ''}">Greeting Cards</a>
                        <a href="/page18.html" class="${currentPath === 'page18.html' ? 'active' : ''}">DIY Gift Boxes</a>
                        <a href="/page21.html" class="${currentPath === 'page21.html' ? 'active' : ''}">Paper Flowers</a>
                        <a href="/page22.html" class="${currentPath === 'page22.html' ? 'active' : ''}">Machine Embroidery</a>
                    </div>
                </div>

                <div class="search-box" style="position: relative;">
                    <input type="text" class="search-input" placeholder="Search 1,000+ products...">
                    <div class="search-results"></div>
                </div>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = menuHTML;
    });

    // 3. Логика поиска
    setTimeout(() => {
        const searchContainers = document.querySelectorAll('.search-box');
        searchContainers.forEach(container => {
            const input = container.querySelector('.search-input');
            const resultsBox = container.querySelector('.search-results');

            if (input && resultsBox) {
                input.addEventListener('input', function(e) {
                    const query = e.target.value.trim();
                    if (query.length < 2) {
                        resultsBox.style.display = 'none';
                        return;
                    }
                    if (typeof filterProducts !== 'undefined') {
                        const results = filterProducts(query);
                        displayResults(results, resultsBox);
                    }
                });
            }
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-box')) {
                document.querySelectorAll('.search-results').forEach(box => box.style.display = 'none');
            }
        });

        initGlobalFreebies();
    }, 500);

    function displayResults(results, container) {
        if (results.length === 0) {
            container.innerHTML = '<div class="no-results">No products found</div>';
        } else {
            container.innerHTML = results.map(item => `
                <a href="${item.link}" class="search-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="search-item-info">
                        <span class="search-item-title">${item.name}</span>
                        <span class="search-item-category">${item.category}</span>
                    </div>
                </a>
            `).join('');
        }
        container.style.display = 'block';
    }

    // --- ФУНКЦИИ ПОДАРКОВ В САЙДБАРЕ ---
    const freebieData = [
        { title: "Daily Free Gifts", img: "image/gift-daily.jpg", link: "https://www.creativefabrica.com/daily-gifts/ref/10996753/" },
        { title: "Free Fonts Collection", img: "image/gift-font.jpg", link: "https://www.creativefabrica.com/freebies/free-fonts/ref/10996753/" },
        { title: "Free Graphics Pack", img: "image/gift-graphic.jpg", link: "https://www.creativefabrica.com/freebies/free-graphics/ref/10996753/" },
        { title: "Free SVG & Craft Files", img: "image/gift-craft.jpg", link: "https://www.creativefabrica.com/freebies/free-svgs/ref/10996753/" }
    ];

    let giftIndex = 0;

    function initGlobalFreebies() {
        const sidebar = document.querySelector('aside.sidebar');
        if (!sidebar) return; 

        const giftWrapper = document.createElement('div');
        giftWrapper.innerHTML = `
            <div class="banner-container" style="border: 2px dashed #ff477e; background: #fffafb; padding: 10px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="color: #ff477e; text-align: center; font-size: 1.1rem; margin-top: 0;">🎁 TODAY'S FREEBIES</h3>
                <div id="daily-gift-box" style="transition: opacity 0.5s ease; min-height: 150px;"></div>
            </div>
        `;
        sidebar.prepend(giftWrapper);

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
                    <img src="${gift.img}" alt="${gift.title}" style="width: 100%; border-radius: 6px; display: block; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <div style="background: #ff477e; color: white; padding: 8px; border-radius: 0 0 6px 6px; font-weight: bold; text-align: center; font-size: 0.9rem;">
                        ${gift.title} ➔
                    </div>
                </a>
            `;
            box.style.opacity = '1';
            giftIndex = (giftIndex + 1) % freebieData.length;
        }, 500);
    }
});
