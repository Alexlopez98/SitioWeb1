document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('#carouselExampleIndicators .carousel-inner');
    const carouselIndicators = document.querySelector('#carouselExampleIndicators .carousel-indicators');

    carouselInner.innerHTML = '';
    if (carouselIndicators) carouselIndicators.innerHTML = '';

    let first = true;
    let indicatorIndex = 0;

    games.forEach(game => {
        if (!game.bannerMenu) return;

        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (first) {
            item.classList.add('active');
            first = false;
        }

        const img = document.createElement('img');
        img.src = game.portada;
        img.alt = game.nombre;
        img.classList.add('d-block', 'w-100', 'carousel-img');

        const caption = document.createElement('div');
        caption.classList.add('carousel-caption', 'd-none', 'd-md-block', 'text-start', 'text-white');

        if (game.newProduct) {
            caption.innerHTML = `
                <h2 class="information">Nuevo Lanzamiento</h2>
                <p class="lead information">¡Descúbrelo ahora!</p>
                <a href="/Juegos/juegos.html?id=${game.id}#" class="btn btn-success">Ver más</a>
            `;
        } else {
            caption.innerHTML = `
                <h2 class="information">${game.nombre}</h2>
                <p class="lead information">$ ${game.precio}</p>
                <a href="/Juegos/juegos.html?id=${game.id}#" class="btn btn-success">Comprar</a>
            `;
        }

        item.appendChild(img);
        item.appendChild(caption);
        carouselInner.appendChild(item);

        if (carouselIndicators) {
            const indicator = document.createElement('button');
            indicator.type = "button";
            indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
            indicator.setAttribute("data-bs-slide-to", indicatorIndex);
            if (indicatorIndex === 0) indicator.classList.add('active');
            indicator.setAttribute("aria-label", `Slide ${indicatorIndex + 1}`);
            carouselIndicators.appendChild(indicator);
            indicatorIndex++;
        }
    });
});
