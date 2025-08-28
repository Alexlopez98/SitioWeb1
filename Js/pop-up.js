document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card[data-game-title]');
    const hoverDetails = document.getElementById('game-hover-details');
    const hoverTitle = document.getElementById('hover-title');
    const hoverDescription = document.getElementById('hover-description');
    const hoverPrice = document.getElementById('hover-price');
    const carouselImagesContainer = document.getElementById('carousel-images');

    let hideTimeout;

    const showPopup = (card) => {
        const title = card.getAttribute('data-game-title');
        const description = card.getAttribute('data-game-desc');
        const price = card.getAttribute('data-game-price');
        const images = card.getAttribute('data-game-images').split(',').map(img => img.trim());

        hoverTitle.textContent = title;
        hoverDescription.textContent = description;
        hoverPrice.textContent = price;

        // Limpiar carrusel
        carouselImagesContainer.innerHTML = '';
        images.forEach((imgSrc, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active');
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('d-block', 'w-100');
            img.alt = title;
            carouselItem.appendChild(img);
            carouselImagesContainer.appendChild(carouselItem);
        });

        const buyButton = document.createElement('a');
        buyButton.href = '/Categorias/Categoria.html';
        buyButton.classList.add('btn', 'btn-success', 'mt-3');
        buyButton.textContent = 'Comprar';

        const gameInfo = hoverDetails.querySelector('.game-info');
        const existingButton = gameInfo.querySelector('.btn-success');
        if (existingButton) existingButton.remove();
        gameInfo.appendChild(buyButton);

        hoverDetails.style.display = 'block';
        hoverDetails.style.opacity = 0;
        hoverDetails.style.transform = 'scale(0.9)';

        const cardRect = card.getBoundingClientRect();
        const popupRect = hoverDetails.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let top = cardRect.top + (cardRect.height / 2) - (popupRect.height / 2);
        let left = cardRect.left + (cardRect.width / 2) - (popupRect.width / 2);

        top = Math.max(10, Math.min(top, windowHeight - popupRect.height - 10));
        left = Math.max(10, Math.min(left, windowWidth - popupRect.width - 10));

        hoverDetails.style.top = `${top}px`;
        hoverDetails.style.left = `${left}px`;

        requestAnimationFrame(() => {
            hoverDetails.style.opacity = 1;
            hoverDetails.style.transform = 'scale(1)';
        });
    };

    const hidePopup = () => {
        hideTimeout = setTimeout(() => {
            hoverDetails.style.opacity = 0;
            hoverDetails.style.transform = 'scale(0.9)';
            setTimeout(() => hoverDetails.style.display = 'none', 250);
        }, 150);
    };

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
            showPopup(card);
        });

        card.addEventListener('mouseleave', hidePopup);

        hoverDetails.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
        hoverDetails.addEventListener('mouseleave', hidePopup);
    });
});
