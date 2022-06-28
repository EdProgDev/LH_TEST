// change city
const modalCityList = document.querySelectorAll(".modal-city__list>li")

function modal () {
    const btnChangeCity = document.querySelector("#change-city")
    const modalCity = document.querySelector("#city-modal")
    const modalContent = document.querySelector(".modal-city__content")

    window.addEventListener("click", (e) => {
        if (e.target === btnChangeCity) {
            modalCity.classList.add("show")
        }
        else if (e.target === modalContent) {
            e.stopPropagation()
        }
        else {
            modalCity.classList.remove("show")
        }
    })
}
modal()

function changeCity () {
    const city = document.querySelector("#city")

    modalCityList.forEach(item => {
        item.addEventListener("click", () => {
            city.innerText = item.innerText
        })
    })
}
changeCity ()


// mobile version
const menu = document.querySelector(".header__nav-company")
const navCompany = document.querySelector(".nav-company")
const searchBtn = document.querySelector("#search-btn")
const formSearch = document.querySelector("#search")

function changeContentMobile() {
    const headerCard = document.querySelector(".header__card")
    const headerMobile = document.querySelector(".header__mobile")
    const navList = document.querySelector(".nav__list")
    const headerAction = document.querySelector(".header__action")
    const changeCity = document.querySelector(".header__city")
    const headerRightBottom = document.querySelector(".header__right-bottom")
    const user = document.querySelector(".header__log-icon")

    if (window.innerWidth <= 991) {
        headerMobile.appendChild(headerCard)
        navCompany.appendChild(navList)
        navCompany.appendChild(headerAction)
        navCompany.appendChild(formSearch)
    }

    if (window.innerWidth <= 530) {
        headerRightBottom.appendChild(user)
        navCompany.appendChild(changeCity)
    }
}
changeContentMobile ()


//menu
function showMenu () {
    const burger = document.querySelector("#burger")

    burger.addEventListener("click", () => {
        menu.classList.add("show-menu")
    })
}
showMenu ()

function closeMenu () {
    const closeMenuBtn = document.querySelector("#close")

    closeMenuBtn.addEventListener("click", () => {
        menu.classList.remove("show-menu")
    })
}
closeMenu()

//search panel

function showSearchPanel () {
    const inputSearch = document.querySelector("#search>input")
    const btnSubmit = document.querySelector("#search>button>img")

    window.addEventListener("click", (e) => {
        if (e.target === searchBtn) {
            formSearch.classList.add("show-search")
        }
        else if (e.target === inputSearch || e.target === btnSubmit) {
            e.stopPropagation()
        }
        else {
            formSearch.classList.remove("show-search")
        }
    })
}
showSearchPanel()