let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Güncel indeksi güncelle
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Carousel container'ı kaydır
    const offset = -currentIndex * 100; // Her bir resmin genişliği %100
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}
