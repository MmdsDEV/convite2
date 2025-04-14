document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Criar bolhas animadas
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
        body.appendChild(bubble);
    }

    // Adicionar interatividade ao convite
    const convite = document.querySelector(".convite");
    if (convite) {
        convite.addEventListener("mouseover", () => {
            convite.style.transform = "rotate(3deg)";
            convite.style.transition = "transform 0.3s ease";
        });

        convite.addEventListener("mouseout", () => {
            convite.style.transform = "rotate(0deg)";
        });
    }

    // Configurar imagens dos cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const coverImage = card.querySelector(".cover-image");
        const titleImage = card.querySelector(".title");
        const characterImage = card.querySelector(".character");

        // Verifica se os elementos existem antes de definir os atributos
        if (coverImage && card.dataset.cover) {
            coverImage.src = card.dataset.cover;
        }
        if (titleImage && card.dataset.title) {
            titleImage.src = card.dataset.title;
        }
        if (characterImage && card.dataset.character) {
            characterImage.src = card.dataset.character;
        }
    });
});