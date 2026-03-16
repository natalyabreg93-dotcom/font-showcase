document.addEventListener("DOMContentLoaded", function() {
    // 1. ЗАГРУЗКА БАЗЫ ПРОДУКТОВ (Убрали "/" для совместимости с GitHub)
    const script = document.createElement('script');
    script.src = 'products.js'; 
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. ГЕНЕРАЦИЯ МЕНЮ
    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts ▾</button>
                    <div class="dropdown-content">
                        <a href="page1.html">Script</a> <a href="page2.html">Serif</a>
                        <a href="page3.html">Retro</a> <a href="page4.html">Minimal</a>
                        <a href="page5.html">Gothic</a> <a href="page6.html">Wedding</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Stickers & Papers ▾</button>
                    <div class="dropdown-content">
                        <a href="page11.html" style="font-weight:bold; border-bottom:1px solid #eee;">Stickers Hub</a>
                        <a href="page11.html#floral-stickers">↳ Floral</a>
                        <a href="page11.html#self-care-stickers">↳ Quotes</a>
                        <a href="page11.html#holiday-stickers">↳ Holiday</a>
                        <a href="page11.html#animal-stickers">↳ Animal</a>
                        <a href="page11.html#food-stickers">↳ Food & Drink</a>
                        <a href="page12.html">Digital Paper</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Business & Canva ▾</button>
                    <div class="dropdown-content">
                        <a href="page13.html" style="font-weight:bold; border-bottom:1px solid #eee;">Branding Kits</a>
                        <a href="page13.html#minimalist-logos">↳ Logos: Minimal</a>
                        <a href="page13.html#beauty-logos">↳ Logos: Beauty</a>
                        <a href="page13.html#business-cards">↳ Cards</a>
                        <a href="page13.html#menu-templates">↳ Menus</a>
                        <a href="page13.html#flyer-templates">↳ Flyers</a>
                        <a href="page13.html#resume-templates">↳ CV</a>
                        <a href="page13.html#certificate-templates">↳ Certs</a>
                        <a href="page13.html#invoice-templates">↳ Invoices</a>
                        <a href="page13.html#brochure-templates">↳ Presentations</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page7.html">Social Media</a>
                        <a href="page20.html">YouTube</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Graphics & POD ▾</button>
                    <div class="dropdown-content">
                        <a href="page8.html">KDP</a> <a href="page9.html">SVG</a>
                        <a href="page15.html">Tumbler</a> <a href="page16.html">Retro POD</a>
                        <a href="page19.html">Laser Cut</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Coloring & Crafts ▾</button>
                    <div class="dropdown-content">
                        <a href="page10.html" style="font-weight:bold; border-bottom:1px solid #eee;">Coloring Hub</a>
                        <a href="page10.html#kids-coloring">↳ Kids</a>
                        <a href="page10.html#kids-animal-coloring">↳ Animals</a>
                        <a href="page10.html#adult-coloring">↳ Mandala</a>
                        <a href="page10.html#fantasy-creatures">↳ Fantasy</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page14.html">Crochet</a> <a href="page17.html">Cards</a>
                        <a href="page18.html">Boxes</a> <a href="page21.html">Flowers</a>
                        <a href="page22.html">Embroidery</a>
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

    // 3. АВТО-ИСПРАВЛЕНИЕ САЙДБАРА (50+ КАТЕГОРИЙ)
    const sidebarElements = document.querySelectorAll('.sidebar .banner-container p, aside p');
    sidebarElements.forEach(el => {
        if (el.textContent.includes('View All') || el.textContent.includes('Categories')) {
            el.innerHTML = '← View All 50+ Categories';
        }
    });

    // 4. АВТО-ВСТАВКА ФУТЕР-МЕНЮ (Только для page10 и page11)
    if (currentPath === 'page10.html' || currentPath === 'page11.html') {
        const existingFooter = document.querySelector('footer');
        const footerHTML = `
            <footer class="site-footer" style="margin-top: 50px; padding: 40px 0; background: #f9f9f9; border-top: 1px solid #eee;">
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; max-width: 1200px; margin: 0 auto; text-align: left;">
                    <div style="margin: 10px;">
                        <h4 style="color: #ff477e;">Stickers & Papers</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li><a href="page11.html">Planner Stickers</a></li>
                            <li><a href="page12.html">Digital Paper</a></li>
                        </ul>
                    </div>
                    <div style="margin: 10px;">
                        <h4 style="color: #ff477e;">Coloring & Crafts</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li><a href="page10.html">Coloring Pages</a></li>
                            <li><a href="page14.html">Crochet Patterns</a></li>
                            <li><a href="page22.html">Embroidery</a></li>
                        </ul>
                    </div>
                    <div style="margin: 10px;">
                        <h4 style="color: #ff477e;">Business</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li><a href="page13.html">Branding Kits</a></li>
                            <li><a href="page7.html">Social Media</a></li>
                        </ul>
                    </div>
                </div>
                <p style="text-align: center; margin-top: 30px; color: #888;">&copy; 2026 CreativVault</p>
            </footer>`;
        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }

    // 5. КНОПКА "НАВЕРХ" (Усиленная инициализация)
    function createBackToTop() {
        if (document.getElementById('backToTopBtn')) return;
        const btn = document.createElement('button');
        btn.innerHTML = '↑';
        btn.id = 'backToTopBtn';
        Object.assign(btn.style, {
            display: 'none', position: 'fixed', bottom: '30px', right: '30px',
            zIndex: '9999', backgroundColor: '#ff477e', color: 'white',
            border: 'none', borderRadius: '50%', width: '50px', height: '50px',
            fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        });
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) btn.style.display = 'block';
            else btn.style.display = 'none';
        });

        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    createBackToTop();

    // 6. ПОИСК (Тот же функционал)
    window.fillSearch = function(text) {
        const input = document.querySelector('.search-input');
        if (input) { input.value = text; input.dispatchEvent(new Event('input')); }
    };

    setTimeout(() => {
        const searchInput = document.querySelector('.search-input');
        const resultsBox = document.querySelector('.search-results');
        if (searchInput && resultsBox) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query.length < 2) { resultsBox.style.display = 'none'; return; }
                if (window.filterProducts) {
                    const res = window.filterProducts(query);
                    resultsBox.innerHTML = res.slice(0, 8).map(item => `
                        <a href="${item.link.replace(/^\//, '')}" class="search-item" style="display:flex; align-items:center; gap:10px; padding:8px; text-decoration:none;">
                            <img src="${item.img}" style="width:40px;height:40px;border-radius:4px;">
                            <div><div style="font-weight:bold;color:#333;font-size:0.8rem;">${item.name}</div><div style="color:#ff477e;font-size:0.7rem;">${item.category}</div></div>
                        </a>`).join('');
                    resultsBox.style.display = 'block';
                }
            });
        }
        
        // Сайдбар подарки
        initGlobalFreebies();
    }, 1000);

    function initGlobalFreebies() {
        const sidebar = document.querySelector('aside.sidebar');
        if (!sidebar) return;
        const giftBox = document.createElement('div');
        giftBox.innerHTML = `
            <div style="margin-top: 20px; text-align: center;">
                <p style="font-weight: bold; color: #ff477e; margin-bottom: 8px;">Can't find something?</p>
                <img src="image/search-arrow.jpg" style="width: 100%; border-radius: 10px; cursor: pointer;" onclick="document.querySelector('.search-input').focus()">
            </div>`;
        sidebar.appendChild(giftBox);
    }
});
