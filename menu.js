document.addEventListener("DOMContentLoaded", function() {
    const navPlaceholders = document.querySelectorAll(".nav-placeholder");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    const menuHTML = `
        <nav class="main-navigation">
            <div class="nav-container">
                <div class="nav-group">
                    <button class="group-btn">Fonts ▾</button>
                    <div class="dropdown-content">
                        <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Script</a>
                        <a href="page2.html" class="${currentPath === 'page2.html' ? 'active' : ''}">Serif</a>
                        <a href="page3.html" class="${currentPath === 'page3.html' ? 'active' : ''}">Retro</a>
                        <a href="page4.html" class="${currentPath === 'page4.html' ? 'active' : ''}">Minimal</a>
                        <a href="page5.html" class="${currentPath === 'page5.html' ? 'active' : ''}">Gothic</a>
                        <a href="page6.html" class="${currentPath === 'page6.html' ? 'active' : ''}">Wedding</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Templates ▾</button>
                    <div class="dropdown-content">
                        <a href="page7.html" class="${currentPath === 'page7.html' ? 'active' : ''}">Social Media</a>
                        <a href="page8.html" class="${currentPath === 'page8.html' ? 'active' : ''}">KDP Interiors</a>
                        <a href="page11.html" class="${currentPath === 'page11.html' ? 'active' : ''}">Planner Stickers</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Graphics ▾</button>
                    <div class="dropdown-content">
                        <a href="page9.html" class="${currentPath === 'page9.html' ? 'active' : ''}">SVG Cut Files</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="group-btn">Activities ▾</button>
                    <div class="dropdown-content">
                        <a href="page10.html" class="${currentPath === 'page10.html' ? 'active' : ''}">Coloring Pages</a>
                    </div>
                </div>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = menuHTML;
    });
});
