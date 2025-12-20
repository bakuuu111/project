const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

const q = prompt('Ваш любимый актер?', ''),
      w = prompt('На сколько оцените его?', ''),
      e = prompt('Ваш любимый актер?', ''),
      r = prompt('На сколько оцените его?', '');

personalMovieDB.actors[q] = w;
personalMovieDB.actors[e] = r;

console.log(personalMovieDB);