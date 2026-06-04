
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