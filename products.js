const products = [
    // Page 15 - Tumblers
    { name: "Heart Valentine Wrap", category: "Tumbler Wraps", img: "https://www.creativefabrica.com/wp-content/uploads/2025/01/18/Heart-Valentine-Sublimation-Tumbler-Wrap-Graphics-114110998-1-1-580x387.jpg", link: "page15.html" },
    { name: "Neon Dragon Wrap", category: "Tumbler Wraps", img: "https://www.creativefabrica.com/wp-content/uploads/2026/01/31/Cute-Gamer-Dragon-Neon-Tumbler-Wrap-Graphics-141369877-1-1-580x435.png", link: "page15.html" },
    
    // Page 14 - Crochet
    { name: "Bee Crochet Amigurumi", category: "Crochet", img: "https://www.creativefabrica.com/wp-content/uploads/2025/05/03/Bee-Crochet-Pattern-Amigurumi-Pdf-Easy-Graphics-121228945-1-1-580x387.jpg", link: "page14.html" },
    { name: "Mini Dragon Pattern", category: "Crochet", img: "https://www.creativefabrica.com/wp-content/uploads/2025/12/27/Mini-Dragon-PDF-Crochet-Pattern-Knitting-138779694-1-1-580x387.png", link: "page14.html" },

    // Page 13 - Logos
    { name: "Botanical Magnolia Logo", category: "Logos", img: "https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Botanical-Magnolia-Flower-Logo-Template-Graphics-9797270-1-1-580x386.jpg", link: "page13.html" },
    { name: "Real Estate Location Logo", category: "Logos", img: "https://www.creativefabrica.com/wp-content/uploads/2021/03/26/Home-Location-Real-Estate-Logo-Design-Graphics-9991877-1-1-580x387.jpg", link: "page13.html" },

    // Page 12 - Digital Paper
    { name: "Vintage French Toile", category: "Digital Paper", img: "https://www.creativefabrica.com/wp-content/uploads/2025/12/01/Vintage-French-Toile-Digital-Paper-Graphics-136824925-1-1-580x387.jpg", link: "page12.html" },
    { name: "Gold Foil Background", category: "Digital Paper", img: "https://www.creativefabrica.com/wp-content/uploads/2022/07/10/Gold-foil-background-png-golden-clip-art-Graphics-33918956-1-1-580x387.jpg", link: "page12.html" },

    // Page 11 - Stickers
    { name: "Colorful Macarons Stickers", category: "Stickers", img: "https://www.creativefabrica.com/wp-content/uploads/2023/02/01/Colorful-Macarons-Stickers-Graphics-59533815-580x387.png", link: "page11.html" },
    { name: "Pastel Rainbow Stickers", category: "Stickers", img: "https://www.creativefabrica.com/wp-content/uploads/2025/03/26/Pastel-rainbow-Happy-Planner-stickers-Graphics-118799801-1-1-580x435.jpg", link: "page11.html" },
];

function filterProducts(query) {
    return products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) || 
        product.category.toLowerCase().includes(query.toLowerCase())
    );
}
