document.addEventListener("DOMContentLoaded", function() {
    // 1. ЗАГРУЗКА БАЗЫ ПРОДУКТОВ
    const script = document.createElement('script');
    script.src = 'products.js';
    document.head.appendChild(script);

    // 2. ГЕНЕРАЦИЯ HTML-КОДА МЕНЮ (Полная синхронизация с index.html)
    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts & Wedding ▾</button>
                    <div class="dropdown-content">
                        <a href="page1.html">Script Fonts</a>
                        <a href="page2.html">Serif Fonts</a>
                        <a href="page3.html">Retro Fonts</a>
                        <a href="page4.html">Minimal Fonts</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page6.html#wedding-svg">Wedding & Monograms</a>
                        <a href="page6.html#wedding-seating-charts">Wedding Seating Charts</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Stickers & Papers ▾</button>
                    <div class="dropdown-content">
                        <a href="page11.html" style="font-weight:bold; border-bottom:1px solid #eee;">Stickers Hub</a>
                        <a href="page11.html#aesthetic-stickers">↳ Aesthetic Stickers</a>
                        <a href="page11.html#floral-stickers">↳ Floral Stickers</a>
                        <a href="page11.html#self-care-stickers">↳ Self Care Stickers</a>
                        <a href="page11.html#holiday-stickers">↳ Holiday Stickers</a>
                        <a href="page11.html#animal-stickers">↳ Animal Stickers</a>
                        <a href="page11.html#food-stickers">↳ Food Stickers</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page11.html#watercolor-textures">Watercolor & Patterns</a>
                        <a href="page11.html#seamless-patterns">Seamless Patterns</a>
                        <a href="page12.html">Digital Paper Packs</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Canva & Marketing ▾</button>
                    <div class="dropdown-content">
                        <a href="page13.html" style="font-weight:bold; border-bottom:1px solid #eee;">Business Templates</a>
                        <a href="page13.html#minimalist-logos">↳ Logo Templates</a>
                        <a href="page13.html#beauty-logos">↳ Salon & Beauty Logos</a>
                        <a href="page13.html#business-cards">↳ Business Cards</a>
                        <a href="page13.html#menu-templates">↳ Menu Templates</a>
                        <a href="page13.html#flyer-templates">↳ Flyer Templates</a>
                        <a href="page13.html#resume-templates">↳ Resume & CV</a>
                        <a href="page13.html#certificate-templates">↳ Certificates</a>
                        <a href="page13.html#invoice-templates">↳ Invoice Templates</a>
                        <a href="page13.html#brochure-templates">↳ Brochures & Presentations</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page7.html">Social Media Kits</a>
                        <a href="page7.html#real-estate">↳ Real Estate</a>
                        <a href="page7.html#coaches">↳ Coaching & Workbooks</a>
                        <a href="page20.html">YouTube Assets</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Graphics & KDP ▾</button>
                    <div class="dropdown-content">
                        <a href="page8.html" style="font-weight:bold; border-bottom:1px solid #eee;">KDP Interiors</a>
                        <a href="page8.html#budget-planners">↳ KDP Budget Planner</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page8.html#recipe-interiors">↳ Recipe Book Interiors</a>
                        <a href="page8.html#fitness-interiors">↳ Fitness & Workout Interiors</a>
                        <a href="page8.html#gratitude-interiors">↳ Gratitude & Mindfulness Interiors</a>
                        <a href="page9.html">SVG Cut Files</a>
                        <a href="page9.html#cricut-svg">↳ Cricut SVG</a>
                        <a href="page9.html#baby-svg">↳ Baby & Nursery SVG</a>
                        <a href="page15.html">Tumbler Wraps</a>
                        <a href="page19.html">Laser Cut Files</a>
                        <a href="page22.html">Machine Embroidery</a>
                    </div>
                </div>
                <div class="nav-group">
                    <button class="group-btn">Coloring & Crafts ▾</button>
                    <div class="dropdown-content">
                        <a href="page10.html" style="font-weight:bold; border-bottom:1px solid #eee;">Coloring Library</a>
                        <a href="page10.html#kids-coloring">↳ Kids Coloring</a>
                        <a href="page10.html#kids-animal-coloring">↳ Animal Coloring Pages</a>
                        <a href="page10.html#adult-coloring">↳ Adult & Mandalas</a>
                        <a href="page10.html#fantasy-creatures">↳ Fantasy Coloring</a>
                        <a href="page10.html#grayscale-portraits">↳ Grayscale Portraits</a>
                        <a href="page10.html#quote-coloring">↳ Inspirational Quotes</a>
                        <a href="page10.html#floral-coloring">↳ Floral Coloring</a>
                        <a href="page10.html#holiday-coloring">↳ Holiday Coloring</a>
                        <a href="page10.html#kawaii-coloring">↳ Kawaii Coloring</a>
                        <div style="height:1px; background:#eee; margin:5px 0;"></div>
                        <a href="page14.html">Crochet Patterns</a>
                        <a href="page21.html">Paper Flowers</a>
                        <a href="page17.html">Greeting Cards</a>
                    </div>
                </div>
                <div class="search-box" style="position: relative;">
                    <input type="text" class="search-input" placeholder="Search 1,000+ items...">
                    <div class="search-results"></div>
                </div>
            </div>
        </nav>
    `;

    // 3. ВСТАВКА МЕНЮ
    if (document.querySelectorAll(".nav-placeholder").length < 2) {
        const footerTag = document.querySelector('footer, .final-cta');
        if (footerTag) {
            const bNav = document.createElement('div');
            bNav.className = 'nav-placeholder';
            bNav.style.margin = '50px 0';
            footerTag.parentNode.insertBefore(bNav, footerTag);
        }
    }
    document.querySelectorAll(".nav-placeholder").forEach(p => p.innerHTML = menuHTML);

    // 4. КНОПКА "НАВЕРХ"
    const upBtn = document.createElement('button');
    upBtn.innerHTML = '↑';
    Object.assign(upBtn.style, {
        display: 'none', position: 'fixed', bottom: '30px', right: '30px',
        zIndex: '9999', backgroundColor: '#ff477e', color: 'white',
        border: 'none', borderRadius: '50%', width: '50px', height: '50px',
        fontSize: '24px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    });
    document.body.appendChild(upBtn);
    window.addEventListener('scroll', () => { upBtn.style.display = window.pageYOffset > 500 ? 'block' : 'none'; });
    upBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // 5. САЙДБАР: ПОДАРКИ И СТРЕЛКА
    const freebieData = [
        { title: "Daily Free Gifts", img: "image/gift-daily.jpg", link: "https://www.creativefabrica.com/daily-gifts/ref/10996753/" },
        { title: "Free Fonts Pack", img: "image/gift-font.jpg", link: "https://www.creativefabrica.com/freebies/free-fonts/ref/10996753/" },
        { title: "Free Graphics", img: "image/gift-graphic.jpg", link: "https://www.creativefabrica.com/freebies/free-graphics/ref/10996753/" }
    ];
    let giftIndex = 0;

    function initSidebarExtras() {
        const sidebar = document.querySelector('.sidebar') || document.querySelector('aside');
        if (!sidebar) return;

        sidebar.querySelectorAll('p').forEach(p => {
            if (p.innerText.toLowerCase().includes('categories')) {
                p.innerHTML = '← View All 50+ Categories';
            }
        });

        if (!document.getElementById('daily-gift-box')) {
            const giftWrapper = document.createElement('div');
            giftWrapper.innerHTML = `
                <div style="border: 2px dashed #ff477e; background: #fffafb; padding: 10px; border-radius: 12px; margin-bottom: 20px;">
                    <h3 style="color: #ff477e; text-align: center; font-size: 1rem; margin-top: 0; font-family: sans-serif;">🎁 TODAY'S FREEBIES</h3>
                    <div id="daily-gift-box" style="transition: opacity 0.5s ease; min-height: 140px;"></div>
                </div>
            `;
            sidebar.prepend(giftWrapper);

            const updateGift = () => {
                const box = document.getElementById('daily-gift-box');
                if (!box) return;
                const g = freebieData[giftIndex];
                box.style.opacity = '0';
                setTimeout(() => {
                    box.innerHTML = `<a href="${g.link}" target="_blank" style="text-decoration:none;">
                        <img src="${g.img}" style="width:100%; border-radius:8px; display:block;">
                        <div style="background:#ff477e; color:white; padding:8px; border-radius:0 0 8px 8px; font-weight:bold; text-align:center; font-size:0.85rem; font-family:sans-serif;">${g.title} ➔</div>
                    </a>`;
                    box.style.opacity = '1';
                    giftIndex = (giftIndex + 1) % freebieData.length;
                }, 500);
            };
            updateGift();
            setInterval(updateGift, 5000);
        }

        if (!document.getElementById('side-search-banner')) {
            const arrowBox = document.createElement('div');
            arrowBox.id = 'side-search-banner';
            arrowBox.style.textAlign = 'center';
            arrowBox.style.marginTop = '20px';
            arrowBox.innerHTML = `
                <p style="font-weight: bold; color: #ff477e; margin-bottom: 10px;">Can't find something?</p>
                <img src="image/search-arrow.jpg" style="width:100%; border-radius: 15px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" onclick="document.querySelector('.search-input').focus()">
            `;
            sidebar.appendChild(arrowBox);
        }
    }

    setTimeout(initSidebarExtras, 800);

    // 6. ПОИСК (с подсказками)
    window.fillSearch = function(t) {
        const ins = document.querySelectorAll('.search-input');
        ins.forEach(i => { i.value = t; i.dispatchEvent(new Event('input')); });
    };

    function showEx(container) {
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
        document.querySelectorAll('.search-box').forEach(sb => {
            const inp = sb.querySelector('.search-input');
            const res = sb.querySelector('.search-results');
            inp.addEventListener('focus', () => { if(!inp.value) showEx(res); });
            inp.addEventListener('input', e => {
                const q = e.target.value.trim();
                if (q.length < 2) { showEx(res); return; }
                if (window.filterProducts) {
                    const results = window.filterProducts(q);
                    res.innerHTML = results.slice(0, 8).map(item => `
                        <a href="${item.link.replace(/^\//, '')}" class="search-item" style="display:flex; align-items:center; gap:12px; padding:10px; text-decoration:none; border-bottom:1px solid #eee;">
                            <img src="${item.img}" style="width:40px;height:40px;border-radius:4px;object-fit:cover;">
                            <div style="display:flex;flex-direction:column;">
                                <span style="font-weight:bold;color:#333;font-size:0.85rem;">${item.name}</span>
                                <span style="color:#ff477e;font-size:0.75rem;">${item.category}</span>
                            </div>
                        </a>`).join('');
                    res.style.display = 'block';
                }
            });
        });
        document.addEventListener('click', e => { if (!e.target.closest('.search-box')) document.querySelectorAll('.search-results').forEach(r => r.style.display = 'none'); });
    }, 1200);

    // 7. EXIT INTENT POPUP LOGIC
    function initExitIntent() {
        if (sessionStorage.getItem('exitIntentShown')) return;
        const modal = document.createElement('div');
        modal.id = 'exitModal';
        Object.assign(modal.style, {
            display: 'none', position: 'fixed', top: '0', left: '0',
            width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: '10000', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'sans-serif'
        });
        modal.innerHTML = `
            <div style="background: white; padding: 40px; border-radius: 20px; text-align: center; max-width: 450px; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <button id="closeExitModal" style="position: absolute; top: 15px; right: 15px; border: none; background: none; font-size: 24px; cursor: pointer; color: #888;">&times;</button>
                <div style="font-size: 50px; margin-bottom: 20px;">🔍</div>
                <h2 style="color: #333; margin-bottom: 15px; font-size: 1.5rem;">Didn't find what you were looking for?</h2>
                <p style="color: #666; margin-bottom: 25px; line-height: 1.5;">Check out our full library of assets! We have over 50+ categories waiting for you.</p>
                <a href="index.html" style="display: block; background: #ff477e; color: white; text-decoration: none; padding: 15px 30px; border-radius: 50px; font-weight: bold; font-size: 1.1rem; transition: 0.3s; box-shadow: 0 4px 15px rgba(255, 71, 126, 0.4);">
                    View All Categories ➔
                </a>
            </div>
        `;
        document.body.appendChild(modal);
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 0 && !sessionStorage.getItem('exitIntentShown')) {
                modal.style.display = 'flex';
                sessionStorage.setItem('exitIntentShown', 'true');
            }
        });
        document.getElementById('closeExitModal').onclick = () => modal.style.display = 'none';
        modal.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };
    }
    initExitIntent();
});
