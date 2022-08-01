const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последих просмотренных фильмов?", "");
    let filmRating = prompt("На сколько его оцените?", "");

    if (lastFilm !== "" && filmRating !== "" && lastFilm !== null && filmRating !== null && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = filmRating;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы - киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);