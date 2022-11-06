
const numberOfFilms = prompt('Сколько фильмов ты уже посмотрел ?', '' );

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false,
};

const firstQuestion = prompt('Один из последних просмотренных фильмов ?', ''),
        yourRatingForFilm = prompt('Насколько оценил бы фильм ?', ''),
        secondQuestion = prompt('Один из последних просмотренных фильмов ?', ''),
        yourRatingForSecondFilm = prompt('Насколько оценил бы фильм ?', '');

personalMovieDB.movies[firstQuestion] = yourRatingForFilm;
personalMovieDB.movies[secondQuestion] = yourRatingForSecondFilm;

console.log(personalMovieDB)