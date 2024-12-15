const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement
const theme = localStorage.getItem('theme')

function checkTheme() {
    const theme = localStorage.getItem('theme')
    if (theme !== null) {
        rootHtml.setAttribute('data-theme', theme)
    }
}

checkTheme()

function saveTheme(theme) {
    localStorage.setItem('theme', theme)
}

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme")

    if(currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light")
        saveTheme('light')
    }
    else {
        rootHtml.setAttribute("data-theme", "dark")
        saveTheme('dark')
    }

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme)


const accordionHeaders = document.querySelectorAll('.accordion__header')

accordionHeaders.forEach(headers => {
    headers.addEventListener('click', () => {
        const accordionItem = headers.parentElement;
        const accordionActive = accordionItem.classList.contains('active')

        accordionActive ? accordionItem.classList.remove('active') : accordionItem.classList.add('active')
    })
})

const menuLinks = document.querySelectorAll('.menu__link')

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuLinks.forEach(i => i.classList.remove('active'))
        item.classList.add('active')
    })
})

