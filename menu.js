document.addEventListener("DOMContentLoaded", function() {
    // 1. Загрузка базы продуктов
    const script = document.createElement('script');
    script.src = '/products.js';
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. Генерация HTML-кода меню (Навигация)
    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts ▾</button>
                    <div class="dropdown-content">
                        <a href="/page1.html" class="${currentPath === 'page1.html' ? 'active' : ''}">Script</a>
                        <a href="/page2.html" class="${currentPath === 'page2.html' ? 'active' : ''}">Serif</a>
                        <a href="/page3.html" class="${currentPath === 'page3.html' ? 'active' : ''}">Retro</a>
                        <a href="/page4.html" class="${currentPath === 'page4.html' ? 'active' : ''}">Minimal</a>
                        <a href="/page5.html" class="${currentPath === 'page5.html' ? 'active' : ''}">Gothic</a>
                        <a href="/page6.html" class="${currentPath === 'page6.html' ? 'active' : ''}">Wedding</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Templates ▾</button>
                    <div class="dropdown-content">
                        <a href="/page7.html" class="${currentPath === 'page7.html' ? 'active' : ''}">Social Media</a>
                        <a href="/page8.html" class="${currentPath === 'page8.html' ? 'active' : ''}">KDP Interiors</a>
                        <a href="/page11.html" class="${currentPath === 'page11.html' ? 'active' : ''}">Planner Stickers</a>
                        <a href="/page12.html" class="${currentPath === 'page12.html' ? 'active' : ''}">Digital Paper</a>
                        <a href="/page13.html" class="${currentPath === 'page13.html' ? 'active' : ''}">Logo Templates</a>
                        <a href="/page20.html" class="${currentPath === 'page20.html' ? 'active' : ''}">YouTube Templates</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Graphics ▾</button>
                    <div class="dropdown-content">
                        <a href="/page9.html" class="${currentPath === 'page9.html' ? 'active' : ''}">SVG Cut Files</a>
                        <a href="/page15.html" class="${currentPath === 'page15.html' ? 'active' : ''}">Tumbler Wraps</a>
                        <a href="/page16.html" class="${currentPath === 'page16.html' ? 'active' : ''}">Retro POD Designs</a>
                        <a href="/page19.html" class="${currentPath === 'page19.html' ? 'active' : ''}">Laser Cut Files</a> 
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Activities ▾</button>
                    <div class="dropdown-content">
                        <a href="/page10.html" class="${currentPath === 'page10.html' ? 'active' : ''}">Coloring Pages</a>
                        <a href="/page14.html" class="${currentPath === 'page14.html' ? 'active' : ''}">Crochet Patterns</a>
                        <a href="/page17.html" class="${currentPath === 'page17.html' ? 'active' : ''}">Greeting Cards</a>
                        <a href="/page18.html" class="${currentPath === 'page18.html' ? 'active' : ''}">Paper Box DIY</a>
                        <a href="/page21.html" class="${currentPath === 'page21.html' ? 'active' : ''}">Paper Flowers</a>
                        <a href="/page22.html" class="${currentPath === 'page22.html' ? 'active' : ''}">Embroidery</a>
                    </div>
                </div>

                <div class="search-box" style="position: relative;">
                    <input type="text" class="search-input" placeholder="Search 1,000+ premium products...">
                    <div style="font-size: 11px; color: #999; margin-top: 5px; padding-left: 10px;">
                        🔍 Try: "Real Estate", "Workbook", "Retro Font"
                    </div>
                    <div class="search-results"></div>
                </div>
                </div>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = menuHTML;
    });

    // 3. Логика поиска (все поля на странице)
    setTimeout(() => {
        const searchContainers = document.querySelectorAll('.search-box');
        searchContainers.forEach(container => {
            const input = container.querySelector('.search-input');
            const resultsBox = container.querySelector('.search-results');

            if (input && resultsBox) {
                input.addEventListener('input', function(e) {
                    const query = e.target.value.trim();
                    
                    document.querySelectorAll('.search-input').forEach(el => {
                        if(el !== e.target) el.value = e.target.value;
                    });

                    if (query.length < 2) {
                        document.querySelectorAll('.search-results').forEach(box => box.style.display = 'none');
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
            const allBoxes = document.querySelectorAll('.search-results');
            const allInputs = document.querySelectorAll('.search-input');
            let isClickInside = false;
            allInputs.forEach(input => { if(input.contains(e.target)) isClickInside = true; });
            allBoxes.forEach(box => { if(box.contains(e.target)) isClickInside = true; });
            if (!isClickInside) {
                allBoxes.forEach(box => box.style.display = 'none');
            }
        });

        // 4. Запуск Глобальных Подарков (Freebies)
        initGlobalFreebies();

    }, 500);

    // --- ФУНКЦИИ ПОИСКА ---
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

    // --- ФУНКЦИИ МАГИЧЕСКИХ ПОДАРКОВ ---
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

    // 1. Создаем и добавляем блок подарков (в начало сайдбара)
    const giftWrapper = document.createElement('div');
    giftWrapper.innerHTML = `
        <div class="banner-container" style="border: 2px dashed #ff477e; background: #fffafb; padding: 10px; border-radius: 10px; margin-bottom: 20px; transition: opacity 0.5s ease;">
            <h3 style="color: #ff477e; text-align: center; font-size: 1.1rem; margin-top: 0; font-family: sans-serif;">🎁 TODAY'S FREEBIES</h3>
            <div id="daily-gift-box" style="transition: opacity 0.5s ease; min-height: 150px;"></div>
        </div>
    `;
    sidebar.prepend(giftWrapper);

    // 2. Создаем и вставляем визуальный баннер-стрелку (сразу после подарков)
    const searchArrow = document.createElement('div');
    searchArrow.innerHTML = `
        <div style="margin-bottom: 25px; text-align: center;">
            <a href="javascript:void(0)" onclick="document.querySelector('.search-input').focus(); return false;" style="text-decoration: none; display: block;">
                <img src="image/search-arrow.jpg" alt="Search 1,000+ items" 
                     style="width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); display: block; transition: transform 0.3s ease;" 
                     onmouseover="this.style.transform='translateY(-3px)';" 
                     onmouseout="this.style.transform='translateY(0)';" />
            </a>
        </div>
    `;
    // Метод .after() вставляет элемент сразу ПОСЛЕ giftWrapper
    giftWrapper.after(searchArrow);

    // 3. Запускаем ротацию подарков
    if (typeof updateDailyGift === 'function') {
        updateDailyGift();
        setInterval(updateDailyGift, 5000);
    }
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
                    <div style="background: #ff477e; color: white; padding: 8px; border-radius: 0 0 6px 6px; font-weight: bold; text-align: center; font-size: 0.9rem; font-family: sans-serif;">
                        ${gift.title} ➔
                    </div>
                </a>
            `;
            box.style.opacity = '1';
            giftIndex = (giftIndex + 1) % freebieData.length;
        }, 500);
    }
});
