document.addEventListener("DOMContentLoaded", function() {
    // 1. ПОДГОТОВКА ССЫЛОК И ПУТЕЙ
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. ГЕНЕРАЦИЯ ГЛАВНОГО МЕНЮ (То же самое, что наверху)
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

    // 3. ПРОВЕРКА И ВСТАВКА КОНТЕЙНЕРОВ ДЛЯ МЕНЮ
    // Если на странице нет второго плейсхолдера (внизу), мы создаем его перед футером
    const placeholders = document.querySelectorAll(".nav-placeholder");
    if (placeholders.length < 2) {
        const footer = document.querySelector('footer');
        if (footer) {
            const bottomPlaceholder = document.createElement('div');
            bottomPlaceholder.className = 'nav-placeholder';
            bottomPlaceholder.style.marginTop = '50px';
            footer.parentNode.insertBefore(bottomPlaceholder, footer);
        }
    }

    // Вставляем меню во все найденные (и созданные) плейсхолдеры
    document.querySelectorAll(".nav-placeholder").forEach(p => {
        p.innerHTML = menuHTML;
    });

    // 4. ИСПРАВЛЕНИЕ НАДПИСИ В САЙДБАРЕ (50+ КАТЕГОРИЙ)
    const sidebarText = document.querySelectorAll('.sidebar .banner-container p, aside p');
    sidebarText.forEach(el => {
        if (el.innerText.includes('View All Categories')) {
            el.innerHTML = '← View All 50+ Categories';
        }
    });

    // 5. КНОПКА "НАВЕРХ"
    const backBtn = document.createElement('button');
    backBtn.innerHTML = '↑';
    Object.assign(backBtn.style, {
        display: 'none', position: 'fixed', bottom: '30px', right: '30px',
        zIndex: '1000', backgroundColor: '#ff477e', color: 'white',
        border: 'none', borderRadius: '50%', width: '50px', height: '50px',
        fontSize: '24px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    });
    document.body.appendChild(backBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) backBtn.style.display = 'block';
        else backBtn.style.display = 'none';
    });
    backBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // 6. ПОИСК И ПОДАРКИ
    window.fillSearch = function(t) {
        const i = document.querySelector('.search-input');
        if (i) { i.value = t; i.dispatchEvent(new Event('input')); }
    };

    setTimeout(() => {
        // Инициализация поиска
        const inputs = document.querySelectorAll('.search-input');
        inputs.forEach(input => {
            const results = input.parentElement.querySelector('.search-results');
            input.addEventListener('input', e => {
                const q = e.target.value.trim();
                if (q.length < 2) { results.style.display = 'none'; return; }
                if (window.filterProducts) {
                    const res = window.filterProducts(q);
                    results.innerHTML = res.slice(0, 6).map(item => `
                        <a href="${item.link.replace(/^\//, '')}" class="search-item" style="display:flex; align-items:center; gap:10px; padding:8px; text-decoration:none;">
                            <img src="${item.img}" style="width:35px;height:35px;border-radius:4px;">
                            <div><div style="font-weight:bold;color:#333;font-size:0.75rem;">${item.name}</div><div style="color:#ff477e;font-size:0.65rem;">${item.category}</div></div>
                        </a>`).join('');
                    results.style.display = 'block';
                }
            });
        });
        
        // Сайдбар стрелка
        const sb = document.querySelector('.sidebar');
        if (sb && !document.getElementById('search-arrow-box')) {
            const box = document.createElement('div');
            box.id = 'search-arrow-box';
            box.style.marginTop = '20px';
            box.innerHTML = `<p style="font-weight:bold;color:#ff477e;text-align:center;">Can't find something?</p>
                             <img src="image/search-arrow.jpg" style="width:100%;border-radius:10px;cursor:pointer;" onclick="document.querySelector('.search-input').focus()">`;
            sb.appendChild(box);
        }
    }, 1000);
});
