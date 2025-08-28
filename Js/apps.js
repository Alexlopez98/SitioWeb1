function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function showGameDetail() {
  const gameId = getQueryParam('id');
  if (!gameId) return;

  const game = games.find(g => g.id === gameId);
  if (!game) return;

  const container = document.getElementById('game-detail');

  const images = [game.portada, ...game.banners];

  let carouselInner = '';
  let carouselIndicators = '';

  images.forEach((img, index) => {
    carouselInner += `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100 carousel-img" alt="${game.nombre}">
      </div>
    `;
    carouselIndicators += `
      <button type="button" data-bs-target="#gameCarousel" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>
    `;
  });

  container.innerHTML = `
    <div class="row g-4 align-items-center justify-content-center">
      <div class="col-lg-7 col-md-8 col-sm-12">
        <div id="gameCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            ${carouselIndicators}
          </div>
          <div class="carousel-inner">
            ${carouselInner}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#gameCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#gameCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
      <div class="col-lg-5 col-md-8 col-sm-12">
        <h2 class="fw-bold">${game.nombre}</h2>
        <p>${game.descripcion}</p>
        <p class="fw-bold">Precio: $ ${game.precio}</p>
        <a href="/Juegos/juegos.html?id=${game.id}#" class="btn btn-success">Comprar</a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', showGameDetail);
