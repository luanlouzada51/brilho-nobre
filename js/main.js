document.getElementById('year').textContent = new Date().getFullYear();

function openWhatsApp() {
    const phone = '5511999999999';
    const message = 'Olá, gostaria de agendar uma lavagem no Brilho Nobre.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const totalItems = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
});

document.querySelector('.hamburger').addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('open');
        document.querySelector('.hamburger').classList.remove('open');
    });
});
