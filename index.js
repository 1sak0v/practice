const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt("Один из последих просмотренных фильмов?", "").trim();
            let filmRating = prompt("На сколько его оцените?", "").trim();

            if (lastFilm !== "" && filmRating !== "" && lastFilm !== null && filmRating !== null && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = filmRating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы - киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGeners: function () {
        for (let i = 1; i < 2; i++) {
            const geners = prompt("Введите ваши любимые жанры через запятую?", "");
            if (geners === "" || geners === null || geners.trim() === "") {
                console.log("Неверный ввод");
                i--;
            } else {
                personalMovieDB.geners = geners.split(",");
            }

        }
        personalMovieDB.geners.forEach((gener, index) => {
            const res = `Любимый жанр ${index + 1} - это ${gener}`;
            console.log(res);
        });
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};