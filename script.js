
/*¨carrousel footer */

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    let index = 0;

    function moverSlider() {
        index++;

        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${varias * 25}%)`;

        if (index >= 3) {
            setTimeout(() => {
                slider.style.transition = "none";
                index = 0;
                slider.style.transform = `translateX(0%)`;
            }, 0); 
        }
    }

    // 5 segundos
    setInterval(moverSlider, 4000);
});

/* carrousel videos */

document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.video-slide');

    let index = 0;

    function cambiarVideo() {

        slides[index].classList.remove('activo');

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        slides[index].classList.add('activo');
    }

    setInterval(cambiarVideo, 8000);

});

/* sistema de solapas */

document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".tab-btn");
    const contenidos = document.querySelectorAll(".tab-content");

    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            const destino = boton.dataset.tab;

            botones.forEach(btn =>
                btn.classList.remove("active")
            );

            contenidos.forEach(contenido =>
                contenido.classList.remove("active")
            );

            boton.classList.add("active");

            document
                .getElementById(destino)
                .classList.add("active");

        });

    });

});