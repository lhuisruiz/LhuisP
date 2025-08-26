let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

changeSlide(); // Mostrar la primera imagen al cargar
setInterval(changeSlide, 3000); // Cambia cada 3 segundos
