const recommendedContainer = document.getElementById("recommended-games");
const recommendedGames = games.filter(game => game.recomendado);

recommendedContainer.innerHTML = "";

const flexContainer = document.createElement("div");
flexContainer.classList.add("d-flex", "flex-wrap", "justify-content-center", "gap-4");

recommendedGames.forEach(game => {
    const card = document.createElement("div");

    card.classList.add("card");
    card.style.width = "18rem";

    card.setAttribute("data-game-id", game.id);
    card.setAttribute("data-game-title", game.nombre);
    card.setAttribute("data-game-desc", game.descripcion);
    card.setAttribute("data-game-price", `$ ${game.precio}`);
    card.setAttribute("data-game-images", game.banners.join(','));

    card.setAttribute("data-game-link", `/Juegos/juegos.html?id=${game.id}#`);

    card.innerHTML = `
        <img src="${game.portada}" class="card-img-top" alt="${game.nombre}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold">${game.nombre}</h5>
            <p class="card-title fw-bold">$ ${game.precio}</p>
        </div>
    `;

    flexContainer.appendChild(card);
});

recommendedContainer.appendChild(flexContainer);
