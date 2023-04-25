class UI {
    static addFilmToUI(newFilm) {
        const filmList = document.getElementById("films")

        filmList.innerHTML += `
        <tr>
            <td><img src="./img/${newFilm.url}.jpeg" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
        </tr>
    `
    }

    static clearInputs(title, director, url) {
        title.value = ""
        director.value = ""
        url.value = ""
    }

    static displayAlerts(type, msg) {
        const cardBody = document.querySelector(".card-body")
        const alertDiv = document.createElement("div")

        alertDiv.className = `alert alert-${type}`
        alertDiv.textContent = msg

        cardBody.appendChild(alertDiv)

        setTimeout(() => {
            alertDiv.remove()
        }, 1000);
    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films")

        films.forEach(function (film) {
            filmList.innerHTML += `
            <tr>
                <td><img src="./img/${film.url}.jpeg" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
            </tr>
        `
        })
    }

    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove()
    }

    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films")

        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove()
        }
    }
}