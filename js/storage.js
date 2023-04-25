class Storage {
    static addFilmToLocalStorage(newFilm) {

        let films = this.getFilmsFromLocalStorage()

        films.push(newFilm)

        localStorage.setItem("films", JSON.stringify(films))
    }

    static getFilmsFromLocalStorage() {
        let films

        if (localStorage.getItem("films") === null) {
            films = []
        }
        else {
            films = JSON.parse(localStorage.getItem("films"))
        }

        return films
    }

    static deleteFilmFromLocalStorage(deletedFilmTitle) {
        let films = this.getFilmsFromLocalStorage()

        films.forEach(function (film, index) {
            if (film.title === deletedFilmTitle) {
                films.splice(index, 1)
            }
        })

        localStorage.setItem("films", JSON.stringify(films))
    }

    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films")
    }
}