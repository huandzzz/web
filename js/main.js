function loadProducts() {
    const container = document.getElementById("productList");
    if (!container) return;

    let html = "";

    products.forEach(p => {
        html += `
            <div class="product">
                <img src="${p.image}" alt="${p.name}"
                     onerror="this.src='https://picsum.photos/200'">
                <h3>${p.name}</h3>
            </div>
        `;
    });

    container.innerHTML = html;
}