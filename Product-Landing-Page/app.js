const hamburger = document.getElementById("humburger")

const navlist = document.getElementById("navlist")

hamburger.addEventListener("click", () => {

    navlist.classList.toggle("navlist-active")
})