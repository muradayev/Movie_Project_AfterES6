const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clearFilmsBtn = document.getElementById("clear-films")

allEventListeners()

function allEventListeners() {
    form.addEventListener("submit", addFilm)

    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromLocalStorage()

        UI.loadAllFilms(films)
    })

    secondCardBody.addEventListener("click", deleteFilm)

    clearFilmsBtn.addEventListener("click", clearAllFilms)
}

function addFilm(event) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if (title === "" || director === "" || url === "") {
        UI.displayAlerts("danger", "Please fill all inputs!")
    }
    else {
        const newFilm = new Film(title, director, url)

        UI.addFilmToUI(newFilm)
        Storage.addFilmToLocalStorage(newFilm)
        UI.displayAlerts("success", "Film was added successfully!")
    }

    UI.clearInputs(titleElement, directorElement, urlElement)

    event.preventDefault()
}

function deleteFilm(event) {
    if (event.target.id === "delete-film") {
        UI.deleteFilmFromUI(event.target)

        const deletedFilmTitle = event.target.parentElement.previousElementSibling.previousElementSibling.textContent
        Storage.deleteFilmFromLocalStorage(deletedFilmTitle)

        UI.displayAlerts("success", "Film was successfully removed from local storage!")
    }
}

function clearAllFilms() {
    if (confirm("Are you sure remove all films?")) {
        UI.clearAllFilmsFromUI()
        Storage.clearAllFilmsFromStorage()
    }
}