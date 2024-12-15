const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme")

    if(currentTheme === "dark") rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")

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