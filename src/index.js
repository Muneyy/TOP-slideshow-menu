import './style.css';

const menuButton = document.getElementById('hamburger-nav');
menuButton.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    // const header = document.querySelector('.header');
    // header.classList.toggle('box-shadow');
    navLinks.classList.toggle('hidden');
});

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let index = 0;

rightButton.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');

    if (index >= 5) {
        slides[index].style.display = 'block';
    } else if (index < 6) {
        for (let i = 0; i < slides.length; i += 1) {
            slides[i].style.display = 'none';
        }
        index += 1;
        slides[index].style.display = 'block';
    }
});

leftButton.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');

    if (index === 0) {
        slides[index].style.display = 'block';
    } else if (index > 0) {
        for (let i = 0; i < slides.length; i += 1) {
            slides[i].style.display = 'none';
        }
        index -= 1;
        slides[index].style.display = 'block';
    }
});
