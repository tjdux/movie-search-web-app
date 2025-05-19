import { movieList } from "../data/movieList.js"
const movies = movieList.results;

const poster = document.querySelector(".poster")
const movieTitle = document.querySelectorAll(".movie-title");
const releaseDate = document.querySelector(".release-date");
const overview = document.querySelector(".overview");
const popularity = document.querySelector(".popularity");
const voteAvg = document.querySelector(".vote_average");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const idx = Number(params.get("idx"))
  renderMovieInfo(idx);
})

function renderMovieInfo(idx){
  const movie = movies[idx];

  poster.setAttribute("src", `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`)
  movieTitle.forEach(elem => elem.textContent = movie.original_title)
  releaseDate.textContent = movie.release_date;
  overview.textContent = movie.overview;
  popularity.textContent = movie.popularity;
  voteAvg.textContent = movie.vote_average;

  maskedLines();
}

function maskedLines(){
  gsap.registerPlugin(SplitText);


  document.fonts.ready.then(() => {
    gsap.set(".split", { opacity: 1 });

    let split;
    SplitText.create(".split", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 0.6,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
        return split;
      }
    });
  });
}