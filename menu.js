document.addEventListener("DOMContentLoaded", function() {
    const script = document.createElement('script');
    script.src = '/products.js';
    document.head.appendChild(script);

    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts ▾</button>
                    <div class="dropdown-content">
                        <a href="/index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Script</a>
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

    // Логика поиска
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
                if (typeof filterProducts !== 'undefined') {
                    const results = filterProducts(query);
                    displayResults(results, resultsBox);
                }
            });
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
