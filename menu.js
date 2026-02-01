document.addEventListener("DOMContentLoaded", function() {
    // 1. Находим все места на странице, где должно быть меню
    const navPlaceholders = document.querySelectorAll(".nav-placeholder");

    // 2. Определяем текущую страницу, чтобы подсветить активную кнопку
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 3. Сама структура меню
    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-category">
                <span class="category-title">Categories:</span>
                <div class="nav-group">
                    <a href="index.html" class="nav-item ${currentPath === 'index.html' ? 'active' : ''}">Script</a>
                    <a href="page2.html" class="nav-item ${currentPath === 'page2.html' ? 'active' : ''}">Serif</a>
                    <a href="page3.html" class="nav-item ${currentPath === 'page3.html' ? 'active' : ''}">Retro</a>
                    <a href="page4.html" class="nav-item ${currentPath === 'page4.html' ? 'active' : ''}">Minimal</a>
                    <a href="page5.html" class="nav-item ${currentPath === 'page5.html' ? 'active' : ''}">Gothic</a>
                    <a href="page6.html" class="nav-item ${currentPath === 'page6.html' ? 'active' : ''}">Wedding</a>
                    <a href="page7.html" class="nav-item ${currentPath === 'page7.html' ? 'active' : ''}">Social</a>
                    <a href="page8.html" class="nav-item ${currentPath === 'page8.html' ? 'active' : ''}">KDP</a>
                </div>
            </div>
        </nav>
    `;

    // 4. Вставляем меню во все плейсхолдеры
    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = menuHTML;
    });
});
