const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('.burger-btn')
const closeBtn = document.querySelector('.close-btn')
const body = document.querySelector('body')

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
    body.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%)"
})
closeBtn.addEventListener('click', () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
    body.style.background = "#FFF"
})


// SLIDER // 

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index,className) {
                    return `<span class=${className}></span>`;
                }
            },
        },
        1440: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            pagination: {
                el: null
            },
        }
    },
});