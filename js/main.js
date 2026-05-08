document.addEventListener('DOMContentLoaded', () => {

    if (document.querySelector('.js-hero-slider')) {
        const stepsSlider = new Swiper('.js-hero-slider', {
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: {
                prevEl: '.js-hero-slider-prev',
                nextEl: '.js-hero-slider-next'
            }
        })
    }

    if (document.querySelector('.js-steps-slider')) {
        const stepsSlider = new Swiper('.js-steps-slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: ".js-steps-slider-pagination",
                type: "progressbar",
            },
        })
    }

    if (document.querySelector('.js-our-clients-forward-slider')) {
        const ourClientsForwardSlider = new Swiper('.js-our-clients-forward-slider', {
            slidesPerView: 'auto',
            spaceBetween: 42,
            loop: true,
            speed: 1200,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        })
    }

    if (document.querySelector('.js-our-clients-backward-slider')) {
        const ourClientsForwardSlider = new Swiper('.js-our-clients-backward-slider', {
            slidesPerView: 'auto',
            spaceBetween: 42,
            loop: true,
            speed: 1200,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
            },
        })
    }

    if (document.querySelector('.js-projects-nav-slider')) {
        const stepsSlider = new Swiper('.js-projects-nav-slider', {
            slidesPerView: 1,
            initialSlide: 1,
            navigation: {
                prevEl: '.js-projects-nav-slider-prev',
                nextEl: '.js-projects-nav-slider-next',
            }
        })
    }

    if (document.querySelector('.js-projects-slider')) {
        const stepsSlider = new Swiper('.js-projects-slider', {
            slidesPerView: 'auto',
            spaceBetween: 0,
        })
    }
})