import { movies } from "../data/movieList.js"
import { maskedLines } from '../styles/effects/masked-lines/masked-lines.js';

const poster = document.querySelector(".poster")
const movieTitle = document.querySelector(".movie-title");
const releaseDate = document.querySelector(".release-date");
const overview = document.querySelector(".overview");
const popularity = document.querySelector(".popularity");
const voteAvg = document.querySelector(".vote_average");

window.addEventListener("DOMContentLoaded", () => {
  const idx = getMovieIdx();
  renderMovieInfo(idx);
})

function getMovieIdx(){
  const params = new URLSearchParams(window.location.search);
  const idx = params.has("idx") ? Number(params.get("idx")) : Math.floor(Math.random() * 200);
  return idx;
}

function renderMovieInfo(idx){
  const movie = movies[idx];

  poster.setAttribute("src", `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`)
  poster.setAttribute("alt", `${movie.original_title} poster`)
  movieTitle.innerHTML = movie.original_title;
  releaseDate.textContent = movie.release_date;
  overview.textContent = movie.overview;
  popularity.textContent = movie.popularity;
  voteAvg.textContent = movie.vote_average;

  maskedLines();
}