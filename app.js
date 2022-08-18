

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
    slidesPerView:  2.5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class=${className}></span>`;
                }
            },
        },
        520: {
            slidesPerView:  1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class=${className}></span>`;
                }
            },
        },
        1140: {
            slidesPerView:  2.5,
            spaceBetween: 30,
            pagination: {
                el: null
            },
        }
    },
});


// FORM VALIDATION // 

const email = document.querySelector('#email')
const form = document.querySelector('#form')
const errorMsg = document.querySelector('#error')
const successrMsg = document.querySelector('#success')



form.addEventListener('submit', (e) => {

    e.preventDefault()
    let messageErrors = []
    let mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

   
    if(email.value.match(mailformat)) {
        successrMsg.style.display = "inline"
        email.style.border = "2px solid #4BB543"
        email.style.color = "#4BB543"
        setTimeout(() => {
            email.style.color = "#242D52"
            email.value = ""
            email.style.border = "none" 
            successrMsg.style.display = "none"     
        }, 2000);

    } else {
        messageErrors.push('Please insert a valid email')
    }

    if (messageErrors.length > 0) {
        e.preventDefault()
        errorMsg.innerHTML = messageErrors
        email.style.color = "#F33C3C"
        email.style.border = "2px solid #F33C3C"
        setTimeout(() => {
            email.style.color = "#242D52"
            email.value = ""
            messageErrors.splice(0,1)
            errorMsg.innerHTML = ""
            email.style.border = "none"      
        }, 2000);
    }
})

