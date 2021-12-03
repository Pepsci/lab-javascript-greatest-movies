// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
 const movie = require("./data")

function getAllDirectors(movies) {
  let director = movies.map(film => film.director)

  return director
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(nbrMovie) {

  let stev = nbrMovie.filter(el => el.director === 'Steven Spielberg' && el.genre.includes('Drama'))

  // let stevenMovie = nbrMovie.filter(el =>  {
  //   if(el.director ==='Steven Spielberg' && el.genre.includes('Drama')){

  //     return el
  //   }
  // });

  // return stevenMovie.length
  return stev.length
  
}
howManyMovies(movie)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(average) {
if(average.length == " " ) return 0
  
  let sum = 0;
  let scores = average.map(av => av.score)
  for (let i = 0; i < scores.length; i++) {
     sum +=scores[i];
    
  }
  return Math.round((sum / scores.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(average) {
  


  let sum = 0;
  let scores = average.map(av => av.score.genre.includes('Drama'))
  for (let i = 0; i < scores.length; i++) {
     sum +=scores[i];
    
  }
  return Math.round((sum / scores.length) * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
