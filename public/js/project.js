window.addEventListener("load", () => {
    document.querySelectorAll(".card").forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 200);
    });
});

const particleFields = document.querySelectorAll('#particleField');

particleFields.forEach(element => {
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--x', `${Math.random() * 400 - 100}px`);
        particle.style.setProperty('--y', `${Math.random() * 400 - 100}px`);
        particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        element.appendChild(particle); // đúng
    }
});
