document.addEventListener("DOMContentLoaded", function() {
    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

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
                    <a href="page9.html" class="nav-item ${currentPath === 'page9.html' ? 'active' : ''}">SVG</a>
                </div>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = menuHTML;
    });
});
