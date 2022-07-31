const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const lastFilm = prompt("Один из последих просмотренных фильмов?", "");
const filmRating = prompt("На сколько его оцените?", "");

const lastFilm2 = prompt("Один из последих просмотренных фильмов?", "");
const filmRating2 = prompt("На сколько его оцените?", "");

personalMovieDB.movies[lastFilm] = filmRating;
personalMovieDB.movies[lastFilm2] = filmRating2;

console.log(personalMovieDB); 