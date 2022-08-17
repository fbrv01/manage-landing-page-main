const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('.burger-btn')
const closeBtn = document.querySelector('.close-btn')
const body = document.querySelector('body')

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
    body.style.background= "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%)"
})
closeBtn.addEventListener('click', () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
    body.style.background = "#FFF"
})