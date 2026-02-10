document.addEventListener("DOMContentLoaded", function() {
    // 1. Подключаем базу товаров
    const script = document.createElement('script');
    script.src = 'products.js';
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 2. HTML Меню + Поиск
    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts ▾</button>
                    <div class="dropdown-content">
                        <a href="index.html">Script</a>
                        <a href="page2.html">Serif</a>
                        <a href="page3.html">Retro</a>
                        <a href="page4.html">Minimal</a>
                        <a href="page5.html">Gothic</a>
                        <a href="page6.html">Wedding</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Templates ▾</button>
                    <div class="dropdown-content">
                        <a href="page7.html">Social Media</a>
                        <a href="page8.html">KDP Interiors</a>
                        <a href="page11.html">Planner Stickers</a>
                        <a href="page12.html">Digital Paper</a>
                        <a href="page13.html">Logo Templates</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Graphics ▾</button>
                    <div class="dropdown-content">
                        <a href="page9.html">SVG Cut Files</a>
                        <a href="page15.html">Tumbler Wraps</a>
                        <a href="page16.html">Retro POD</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Activities ▾</button>
                    <div class="dropdown-content">
                        <a href="page10.html">Coloring Pages</a>
                        <a href="page14.html">Crochet Patterns</a>
                    </div>
                </div>

                <div class="search-box">
                    <input type="text" id="searchInput" class="search-input" placeholder="Search products...">
                    <div id="searchResults" class="search-results"></div>
                </div>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = menuHTML;
    });

    // 3. Логика поиска (запускается после загрузки меню)
    setTimeout(() => {
        const input = document.getElementById('searchInput');
        const resultsBox = document.getElementById('searchResults');

        if(input) {
            input.addEventListener('input', function(e) {
                const query = e.target.value.trim();
                
                if (query.length < 2) {
                    resultsBox.style.display = 'none';
                    return;
                }

                // Функция из products.js
                if (typeof filterProducts !== 'undefined') {
                    const results = filterProducts(query);
                    displayResults(results, resultsBox);
                }
            });

            // Скрывать поиск при клике вне его
            document.addEventListener('click', function(e) {
                if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
                    resultsBox.style.display = 'none';
                }
            });
        }
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
