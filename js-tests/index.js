const btnTheme = document.getElementById("btn-theme")
const container = document.getElementById("container")

btnTheme.addEventListener("click", () => {
    container.classList.toggle("light-theme")
})