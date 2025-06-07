const hamburgerBtn = document.getElementById('hamburger-btn');
const slideMenu = document.getElementById('slide-menu');

hamburgerBtn.addEventListener('click', () => {
    slideMenu.classList.toggle('open');
});