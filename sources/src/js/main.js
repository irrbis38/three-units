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

// ========== FORM VALIDATION

var initInputCheck = (formElements) => {
    formElements.forEach((el) => {
        el.addEventListener("input", () => {
            el.classList.remove("error");
        });
    });
};

var doFormValidation = (formElements) => {
    var requiredElements = formElements.filter((el) => {
        return el.required;
    });

    requiredElements.length > 0 &&
        requiredElements.forEach((el) => {
            if (
                el.dataset.maska &&
                el.value.length !== el.dataset.maska.length
            ) {
                el.classList.add("error");
            } else if (!el.value) {
                el.classList.add("error");
            } else {
                el.classList.remove("error");
            }
        });
};

var checkErorrs = (formElements) => {
    var isErrorConsist = formElements.some((el) =>
        el.classList.contains("error")
    );
    return !isErrorConsist;
};

var initFormValidation = (feedback) => {
    var form = document.querySelector(".block_lidforma_art6__form");

    if (!form) return;

    var inputs = Array.from(
        form.querySelectorAll(".block_lidforma_art6__input")
    );

    inputs.length > 0 && initInputCheck(inputs);

    console.log(inputs);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        doFormValidation(inputs);

        var checkResult = checkErorrs(inputs);

        if (checkResult) {
            form.reset();

            feedback.classList.add("success");
        }
    });
};

var addMask = () => {
    // init mask inputs
    var initMaskaInput = () => {
        const { MaskInput } = Maska;
        const maskIinput = new MaskInput("[data-maska]");
    };

    var maskedInput = document.querySelectorAll("[data-maska]");

    maskedInput && initMaskaInput();
};

document.addEventListener("DOMContentLoaded", () => {
    initProjectsSlider();

    // init form validation
    var feedback = document.querySelector(".block_lidforma_art6");
    feedback && initFormValidation(feedback);

    // init mask
    addMask();
});
