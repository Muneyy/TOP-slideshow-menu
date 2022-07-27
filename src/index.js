import './style.css';

const menuButton = document.getElementById('hamburger-nav');
menuButton.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    // const header = document.querySelector('.header');
    // header.classList.toggle('box-shadow');
    navLinks.classList.toggle('hidden');
});
