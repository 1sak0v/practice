let numbersOfFilms;

const start = () => {
    numbersOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numbersOfFilms == "" || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
};

start();

const personalMovieDB = {
    count: +numbersOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const rememberMyFilms = () => {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt("Один из последих просмотренных фильмов?", "").trim();
        let filmRating = prompt("На сколько его оцените?", "").trim();
    
        if (lastFilm !== "" && filmRating !== "" && lastFilm !== null && filmRating !== null && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = filmRating;
        } else {
            i--;
        }
    }
};

rememberMyFilms();

const detectPersonalLevel = () => {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы - киноман");
    } else {
        console.log("Произошла ошибка");
    }
};

detectPersonalLevel();

const showMyDB = () => {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
};

showMyDB();

const writeYourGeners = () => {
    for (let i = 1; i <= 3; i++) {
        const gener = prompt(`Ваш любимый жанр под номером ${i}?`, "");
        personalMovieDB.geners[i-1] = gener;
    }
};

writeYourGeners();