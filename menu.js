document.addEventListener("DOMContentLoaded", function() {
    const script = document.createElement('script');
    script.src = '/products.js';
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // Убрали id="searchInput" и id="searchResults", оставили только классы
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

                <div class="search-box">
                    <input type="text" class="search-input" placeholder="Search products...">
                    <div class="search-results"></div>
                </div>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = menuHTML;
    });

    // Логика поиска для ВСЕХ полей на странице
    setTimeout(() => {
        const searchContainers = document.querySelectorAll('.search-box');

        searchContainers.forEach(container => {
            const input = container.querySelector('.search-input');
            const resultsBox = container.querySelector('.search-results');

            if (input && resultsBox) {
                input.addEventListener('input', function(e) {
                    const query = e.target.value.trim();
                    
                    // Синхронизация текста во всех полях поиска (опционально)
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

        // Закрытие результатов при клике вне поиска
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
});
