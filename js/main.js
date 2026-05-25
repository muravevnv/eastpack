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

        const slideTitles = document.querySelectorAll('[data-slide-title]');

        if (slideTitles.length > 0) {
            slideTitles.forEach(slideTitle => {
                slideTitle.addEventListener('click', () => {
                    slideTitles.forEach(slideTitle => slideTitle.classList.remove('is-active'));
                    slideTitle.classList.add('is-active');
                    stepsSlider.slideTo(parseInt(slideTitle.getAttribute('data-slide-title')));
                })
            });
        }
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


    if (document.querySelector('.js-hardware-slider')) {
        const hardwareSlider = new Swiper('.js-hardware-slider', {
            slidesPerView: 'auto',
            freeMode: true,
        })
    }


    if (document.querySelector('.js-projects-nav-slider')) {

        function handleSlideChange(swiper) {
            const slides = swiper.slides;
            const activeIndex = swiper.activeIndex;

            if (slides && slides[activeIndex]) {
                const activeSlide = slides[activeIndex];
                const targetId = activeSlide.getAttribute('data-nav-btn');

                if (targetId) {
                    switchActiveSection(targetId);
                }
            }
        }

        function switchActiveSection(targetId) {
            const sections = document.querySelectorAll('[data-section]');

            if (sections.length === 0) {
                return;
            }

            sections.forEach(section => {
                const sectionId = section.getAttribute('data-section');

                if (sectionId === targetId) {
                    section.classList.add('is-active');
                } else {
                    section.classList.remove('is-active');
                }
            });
        }

        const stepsSlider = new Swiper('.js-projects-nav-slider', {
            slidesPerView: 1,
            initialSlide: 1,
            navigation: {
                prevEl: '.js-projects-nav-slider-prev',
                nextEl: '.js-projects-nav-slider-next',
            },
            on: {
                init: function () {
                    setTimeout(() => {
                        handleSlideChange(this);
                    }, 50);
                },
                slideChange: function () {
                    handleSlideChange(this);
                }
            }
        })
    }

    if (document.querySelector('.js-projects-slider')) {
        const stepsSlider = new Swiper('.js-projects-slider', {
            slidesPerView: 'auto',
            slideToClickedSlide: true,
        })
    }


    if (document.querySelector('.js-hardware-categories-slider')) {
        const stepsSlider = new Swiper('.js-hardware-categories-slider', {
            slidesPerView: 'auto',
            spaceBetween: 8,
            freeMode: true,

            1024: {
                spaceBetween: 16,
            }
        })
    }

    function initHeaderSearch() {
        const headerSearch = document.querySelector('.js-header-search');
        const headerSearchBtn = document.querySelector('.js-header-search-btn');
        const headerSearchForm = document.querySelector('.js-header-search-form');
        const headerContacts = document.querySelector('.js-header-contacts');

        headerSearchBtn.addEventListener('click', () => {
            headerSearch.classList.add('is-active');
            headerContacts.classList.add('is-hidden');
        });

        document.addEventListener('click', (e) => {
            if (!headerSearch.contains(e.target) && !e.target.closest('.js-header-search-btn')) {
                headerSearch.classList.remove('is-active');
                headerContacts.classList.remove('is-hidden');
                headerSearchForm.reset();
            }
        });
    }

    initHeaderSearch();

    function initHeaderFixed() {
        const header = document.querySelector('.header');

        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('is-fixed');
            } else {
                header.classList.remove('is-fixed');
            }
        })
    }

    initHeaderFixed();

    function iniInnerMenu() {
        const toggleActiveLevel = (items, targetSelector, activeAttr, activeValue) => {
            items.forEach(item => item.classList.remove('is-active'));

            const targetEl = document.querySelector(`${targetSelector}[${activeAttr}="${activeValue}"]`);
            if (targetEl) {
                targetEl.classList.add('is-active');
            }
        };

        const innerMenuBtns = document.querySelectorAll('.js-menu-inner-btn');
        const innerMenus = document.querySelectorAll('.js-menu-inner');
        const innerMenuClose = document.querySelectorAll('.js-menu-inner-close');

        const menuInnerItems = document.querySelectorAll('.js-menu-inner-item');
        const menuInnerSections = document.querySelectorAll('.js-menu-inner-section');

        const menuInnerSubmenusItems = document.querySelectorAll('.js-menu-inner-submenu-item');
        const menuInnerBlocks = document.querySelectorAll('.js-menu-inner-block');

        const resetAllMenus = () => {
            const allElements = [
                ...innerMenus,
                ...innerMenuBtns,
                ...menuInnerItems,
                ...menuInnerSections,
                ...menuInnerSubmenusItems,
                ...menuInnerBlocks
            ];
            allElements.forEach(el => el.classList.remove('is-active'));
        };

        innerMenuBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                const target = btn.getAttribute('data-menu-inner-btn');
                toggleActiveLevel(innerMenus, '.js-menu-inner', 'data-menu-inner', target);
                innerMenuBtns.forEach(b => b.classList.toggle('is-active', b === btn));
            });
        });

        innerMenuClose.forEach(btn => {
            btn.addEventListener('click', resetAllMenus);
        });

        menuInnerItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const target = item.getAttribute('data-inner-item');
                toggleActiveLevel(menuInnerSections, '.js-menu-inner-section', 'data-inner-section', target);
                menuInnerItems.forEach(i => i.classList.toggle('is-active', i === item));
            });
        });

        menuInnerSubmenusItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const target = item.getAttribute('data-inner-submenu-item');
                toggleActiveLevel(menuInnerBlocks, '.js-menu-inner-block', 'data-inner-submenu-block', target);
                menuInnerSubmenusItems.forEach(i => i.classList.toggle('is-active', i === item));
            });
        });
    }

    iniInnerMenu();

    const partnersData = {
        "1": {
            logo: "./images/partners/logo-01.png",
            name: "Sejong Pharmatech,",
            country: "Южная Корея",
            desc: "Производитель технологического оборудования для фармацевтического, пищевого и химического производства",
            labels: ["таблетпрессы", "оборудование для нанесения покрытий", "машины наполнения капсул"]
        },
        "2": {
            logo: "./images/partners/logo-02.png",
            name: "SAP Systems,",
            country: "Германия",
            desc: "Разработка комплексных ERP-решений для автоматизации бизнес-процессов крупных предприятий.",
            labels: ["программное обеспечение", "облачные сервисы"]
        },
        "3": {
            logo: "./images/partners/logo-03.png",
            name: "Bosch Packaging,",
            country: "Германия",
            desc: "Поставка упаковочных линий для ампул, флаконов и шприцев.",
            labels: ["фасовка", "упаковка", "стерилизация", "блистеры"]
        }
    };

    const filterButtons = document.querySelectorAll('.partners__filters-btn');

    const partnersList = document.querySelector('.partners__list');
    const partnersItems = document.querySelectorAll('.partners__item');
    const popup = document.querySelector('.partners__popup');

    const popupClose = popup.querySelector('.partners__popup-close');
    const popupImg = popup.querySelector('.partners__popup-logo img');
    const popupName = popup.querySelector('.partners__popup-name');
    const popupCountry = popup.querySelector('.partners__popup-country');
    const popupDesc = popup.querySelector('.partners__popup-desc');
    const popupLabelsContainer = popup.querySelector('.partners__popup-labels');

    const closePopup = () => {
        popup.classList.remove('is-open');
        if (partnersList) {
            partnersList.classList.remove('is-locked');
        }
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            closePopup();

            filterButtons.forEach(btn => btn.classList.remove('is-active'));
            button.classList.add('is-active');

            const currentFilter = button.getAttribute('data-filter');

            partnersItems.forEach(item => {
                const itemCountry = item.getAttribute('data-country');

                if (currentFilter === 'all' || itemCountry === currentFilter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    partnersItems.forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            const data = partnersData[id];

            if (!data) return;

            if (popupImg) {
                popupImg.src = data.logo;
                popupImg.alt = data.name;
            }
            if (popupName) popupName.textContent = data.name;
            if (popupCountry) popupCountry.textContent = data.country;
            if (popupDesc) popupDesc.textContent = data.desc;

            if (popupLabelsContainer) {
                popupLabelsContainer.innerHTML = '';

                data.labels.forEach(labelText => {
                    const labelLink = document.createElement('a');
                    labelLink.href = '#';
                    labelLink.className = 'partners__popup-label';
                    labelLink.textContent = labelText;
                    popupLabelsContainer.appendChild(labelLink);
                });
            }

            const cardLeft = item.offsetLeft;
            const cardTop = item.offsetTop;
            const cardWidth = item.offsetWidth;
            const containerWidth = partnersList ? partnersList.offsetWidth : 0;

            // Проверяем, находится ли карточка в правой половине контейнера (4, 5, 6 колонки)
            if (cardLeft + (cardWidth / 2) > containerWidth / 2) {
                // Если справа: выравниваем правый край попапа по правому краю карточки
                // С учетом того, что попап занимает ровно 50% от ширины родителя
                const targetLeft = (cardLeft + cardWidth) - (containerWidth * 0.5);
                popup.style.left = `${targetLeft}px`;
            } else {
                // Если слева (1, 2, 3 колонки): выравниваем левый край попапа по левому краю карточки
                popup.style.left = `${cardLeft - 1}px`;
            }

            // Задаем верхнюю координату (вровень с карточкой)
            popup.style.top = `${cardTop - 1}px`;

            // Шаг Г: Активация классов видимости
            popup.classList.add('is-open');
            if (partnersList) {
                partnersList.classList.add('is-locked');
            }
        });
    });

    if (popupClose) {
        popupClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closePopup();
        });
    }

    document.addEventListener('click', (e) => {
        if (popup && !popup.contains(e.target) && !e.target.closest('.partners__item')) {
            closePopup();
        }
    });

    function initTabs() {
        const tabButtons = document.querySelectorAll('[data-tabs-btn]');
        const tabSections = document.querySelectorAll('[data-tabs-section]');

        if (tabButtons.length > 0 && tabSections.length > 0) {

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Получаем значение ключа текущей кнопки (например: "about")
                    const targetTabPath = button.getAttribute('data-tabs-btn');

                    // Шаг А: Переключаем активный класс для кнопок
                    tabButtons.forEach(btn => btn.classList.remove('is-active'));
                    button.classList.add('is-active');

                    // Шаг Б: Переключаем активный класс для секций контента
                    tabSections.forEach(section => {
                        const sectionPath = section.getAttribute('data-tabs-section');

                        // Если значение секции совпадает с нажатой кнопкой — показываем её
                        if (sectionPath === targetTabPath) {
                            section.classList.add('is-active'); // Используйте класс, который вам ближе по верстке
                        } else {
                            section.classList.remove('is-active');
                        }
                    });
                });
            });
        }
    }

    initTabs();

    function initSpollers() {

        const spollers = document.querySelectorAll('[data-spoller]');

        if (spollers.length > 0) {
            spollers.forEach(spoller => {
                const head = spoller.querySelector('[data-spoller="head"]');
                const body = spoller.querySelector('[data-spoller="body"]');

                if (!head || !body) return;

                head.addEventListener('click', () => {
                    const isOpen = spoller.classList.contains('is-open');

                    spollers.forEach(otherSpoller => {
                        if (otherSpoller !== spoller) {
                            otherSpoller.classList.remove('is-open');
                            const otherBody = otherSpoller.querySelector('[data-spoller="body"]');
                            if (otherBody) otherBody.style.maxHeight = null;
                        }
                    });

                    if (isOpen) {
                        spoller.classList.remove('is-open');
                        body.style.maxHeight = null;
                    } else {
                        spoller.classList.add('is-open');
                        body.style.maxHeight = body.scrollHeight + 'px';
                    }
                });
            });
        }
    }

    initSpollers();

    function initMenu() {
        const menu = document.querySelector('.js-menu');
        const burger = document.querySelector('.js-header-burger');
        const sectionControls = document.querySelectorAll('[data-section-control]');
        const sectionBackButtons = document.querySelectorAll('[data-section-back]');
        const menuSections = document.querySelectorAll('.menu__section');

        if (burger && menu) {
            burger.addEventListener('click', () => {
                if (menu.classList.contains('is-open')) {
                    burger.classList.remove('is-active');
                    menu.classList.remove('is-open');
                    document.body.style.overflow = '';
                    menuSections.forEach(section => section.classList.remove('is-active'));
                } else {
                    burger.classList.add('is-active');
                    menu.classList.add('is-open');
                    document.body.style.overflow = 'hidden';
                }
            });

            sectionControls.forEach(control => {
                control.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetSection = control.getAttribute('data-section-control');
                    const allSections = menu.querySelectorAll('.menu__section');
                    allSections.forEach(section => {
                        if (section.getAttribute('data-section') === targetSection) {
                            section.classList.add('is-active');
                        } else {
                            section.classList.remove('is-active');
                        }
                    });
                });
            });

            sectionBackButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetSection = button.getAttribute('data-section-back');
                    const section = menu.querySelector(`.menu__section[data-section="${targetSection}"]`);
                    console.log(targetSection, section);
                    if (section) {
                        section.classList.remove('is-active');
                    }
                });
            });
        }
    }

    initMenu();

})