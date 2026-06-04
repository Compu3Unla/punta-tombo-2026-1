document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    let index = 0;

    function moverSlider() {
        index++;

        slider.style.transition = "transform 0.0s ease-in-out";
        slider.style.transform = `translateX(-${index * 25}%)`;

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