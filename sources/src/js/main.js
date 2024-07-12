var initProjectsSlider = () => {
    var sliderContainers = document.querySelectorAll(
        ".block_proekt_art6__slider"
    );

    if (sliderContainers.length < 1) return;

    sliderContainers.forEach((container) => {
        new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                prevEl: container.querySelector(".block_proekt_art6__prev"),
                nextEl: container.querySelector(".block_proekt_art6__next"),
            },
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    initProjectsSlider();
});
