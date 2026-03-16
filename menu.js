document.addEventListener("DOMContentLoaded", function() {
    // 1. ЗАГРУЗКА БАЗЫ ПРОДУКТОВ
    const script = document.createElement('script');
    script.src = 'products.js';
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. ГЕНЕРАЦИЯ HTML-КОДА МЕНЮ
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
                        <a href="page11.html#floral-stickers">↳ Floral Stickers</a>
                        <a href="page11.html#self-care-stickers">↳ Quotes & Self Care</a>
                        <a href="page11.html#holiday-stickers">↳ Holiday Stickers</a>
                        <a href="page11.html#animal-stickers">↳ Animal Stickers</a>
                        <a href="page11.html#food-stickers">↳ Food & Drink</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page12.html">Digital Paper Packs</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Business & Canva ▾</button>
                    <div class="dropdown-content">
                        <a href="page13.html" style="font-weight:bold; border-bottom:1px solid #eee;">Branding Kits</a>
                        <a href="page13.html#minimalist-logos">↳ Minimalist Logos</a>
                        <a href="page13.html#beauty-logos">↳ Beauty Logos</a>
                        <a href="page13.html#business-cards">↳ Business Cards</a>
                        <a href="page13.html#menu-templates">↳ Menu Templates</a>
                        <a href="page13.html#flyer-templates">↳ Flyer Templates</a>
                        <a href="page13.html#resume-templates">↳ Resumes & CV</a>
                        <a href="page13.html#certificate-templates">↳ Certificates</a>
                        <a href="page13.html#invoice-templates">↳ Invoices</a>
                        <a href="page13.html#brochure-templates">↳ Presentations</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page7.html">Social Media Kits</a>
                        <a href="page20.html">YouTube Assets</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Graphics & POD ▾</button>
                    <div class="dropdown-content">
                        <a href="page8.html">KDP Interiors</a>
                        <a href="page9.html">SVG Cut Files</a>
                        <a href="page15.html">Tumbler Wraps</a>
                        <a href="page16.html">Retro POD Designs</a>
                        <a href="page19.html">Laser Cut Files</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Coloring & Crafts ▾</button>
                    <div class="dropdown-content">
                        <a href="page10.html" style="font-weight:bold; border-bottom:1px solid #eee;">Coloring Library</a>
                        <a href="page10.html#kids-coloring">↳ Kids Coloring</a>
                        <a href="page10.html#kids-animal-coloring">↳ Animal Coloring</a>
                        <a href="page10.html#adult-coloring">↳ Mandala & Zen</a>
                        <a href="page10.html#fantasy-creatures">↳ Fantasy Creatures</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page14.html">Crochet Patterns</a>
                        <a href="page17.html">Greeting Cards</a>
                        <a href="page18.html">DIY Gift Boxes</a>
                        <a href="page21.html">Paper Flowers</a>
                        <a href="page22.html">Embroidery Art</a>
                    </div>
                </div>
                <div class="search-box" style="position: relative;">
                    <input type="text" class="search-input" placeholder="Search 1,000+ items...">
                    <div class="search-results"></div>
                </div>
            </div>
        </nav>
    `;

    // 3. ВСТАВКА МЕНЮ (ВЕРХ И НИЗ)
    if (navPlaceholders.length < 2) {
        const footer = document.querySelector('footer');
        if (footer) {
            const bottomNav = document.createElement('div');
            bottomNav.className = 'nav-placeholder';
            bottomNav.style.margin = '40px 0';
            footer.parentNode.insertBefore(bottomNav, footer);
        }
    }

    document.querySelectorAll(".nav-placeholder").forEach(p => p.innerHTML = menuHTML);

    // 4. ИСПРАВЛЕНИЕ НАДПИСИ 50+ В САЙДБАРЕ
    const sidebarP = document.querySelectorAll('.sidebar .banner-container p, aside p');
    sidebarP.forEach(el => {
        if (el.innerText.includes('View All')) {
            el.innerHTML = '← View All 50+ Categories';
        }
    });

    // 5. КНОПКА "НАВЕРХ"
    const btnUp = document.createElement('button');
    btnUp.innerHTML = '↑';
    Object.assign(btnUp.style, {
        display: 'none', position: 'fixed', bottom: '30px', right: '30px',
        zIndex: '9999', backgroundColor: '#ff477e', color: 'white',
        border: 'none', borderRadius: '50%', width: '50px', height: '50px',
        fontSize: '24px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    });
    document.body.appendChild(btnUp);
    window.addEventListener('scroll', () => {
        btnUp.style.display = window.pageYOffset > 500 ? 'block' : 'none';
    });
    btnUp.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // 6. ФУНКЦИИ ПОИСКА
    window.fillSearch = function(text) {
        const inputs = document.querySelectorAll('.search-input');
        inputs.forEach(input => {
            input.value = text;
            input.dispatchEvent(new Event('input'));
        });
    };

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

    setTimeout(() => {
        document.querySelectorAll('.search-box').forEach(box => {
            const input = box.querySelector('.search-input');
            const resBox = box.querySelector('.search-results');
            input.addEventListener('focus', () => { if(!input.value) showSearchExample(resBox); });
            input.addEventListener('input', e => {
                const q = e.target.value.trim();
                if (q.length < 2) { showSearchExample(resBox); return; }
                if (window.filterProducts) {
                    const res = window.filterProducts(q);
                    resBox.innerHTML = res.slice(0, 8).map(item => `
                        <a href="${item.link.replace(/^\//, '')}" class="search-item" style="display:flex; align-items:center; gap:10px; padding:10px; text-decoration:none; border-bottom:1px solid #eee;">
                            <img src="${item.img}" style="width:40px;height:40px;border-radius:4px;object-fit:cover;">
                            <div style="display:flex;flex-direction:column;">
                                <span style="font-weight:bold;color:#333;font-size:0.85rem;">${item.name}</span>
                                <span style="color:#ff477e;font-size:0.75rem;">${item.category}</span>
                            </div>
                        </a>`).join('');
                    resBox.style.display = 'block';
                }
            });
        });

        document.addEventListener('click', e => {
            if (!e.target.closest('.search-box')) document.querySelectorAll('.search-results').forEach(r => r.style.display = 'none');
        });

        initSidebarMagic();
    }, 1000);

    // 7. ПОДАРКИ И СТРЕЛКА В САЙДБАРЕ
    const freebieData = [
        { title: "Daily Free Gifts", img: "image/gift-daily.jpg", link: "https://www.creativefabrica.com/daily-gifts/ref/10996753/" },
        { title: "Free Fonts Pack", img: "image/gift-font.jpg", link: "https://www.creativefabrica.com/freebies/free-fonts/ref/10996753/" },
        { title: "Free Graphics", img: "image/gift-graphic.jpg", link: "https://www.creativefabrica.com/freebies/free-graphics/ref/10996753/" }
    ];
    let giftIndex = 0;

    function initSidebarMagic() {
        const sb = document.querySelector('.sidebar');
        if (!sb) return;

        const giftWrapper = document.createElement('div');
        giftWrapper.innerHTML = `
            <div style="border: 2px dashed #ff477e; background: #fffafb; padding: 10px; border-radius: 12px; margin-bottom: 20px;">
                <h3 style="color: #ff477e; text-align: center; font-size: 1rem; margin-top: 0;">🎁 TODAY'S FREEBIES</h3>
                <div id="daily-gift-box" style="transition: opacity 0.5s ease; min-height: 140px;"></div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <p style="font-weight: bold; color: #ff477e; margin-bottom: 10px;">Can't find something?</p>
                <img src="image/search-arrow.jpg" style="width:100%; border-radius: 15px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" onclick="document.querySelector('.search-input').focus()">
            </div>
        `;
        sb.prepend(giftWrapper);

        const updateGift = () => {
            const box = document.getElementById('daily-gift-box');
            if (!box) return;
            const g = freebieData[giftIndex];
            box.style.opacity = '0';
            setTimeout(() => {
                box.innerHTML = `<a href="${g.link}" target="_blank" style="text-decoration:none;">
                    <img src="${g.img}" style="width:100%; border-radius:8px;">
                    <div style="background:#ff477e; color:white; padding:6px; border-radius:0 0 8px 8px; font-weight:bold; text-align:center; font-size:0.8rem;">${g.title} ➔</div>
                </a>`;
                box.style.opacity = '1';
                giftIndex = (giftIndex + 1) % freebieData.length;
            }, 500);
        };
        updateGift();
        setInterval(updateGift, 5000);
    }
});
