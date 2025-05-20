import { movieList } from "../data/movieList.js";

const movieTitleInput = document.querySelector("#movie-title");
const searchMovieForm = document.querySelector(".search-movie");
const movieLi = document.querySelector(".movie-list");

const movies = movieList.results;
let searchedMovies = [];

searchMovieForm.addEventListener("submit", function(e){
  e.preventDefault();

  movieLi.innerHTML = ``;
  const movieTitle = movieTitleInput.value.trim().toLowerCase();
  searchedMovies = [];

  let searchedMoviesinnerHTML = ''
  for (const movie of movies) {
    if (movie.title.toLowerCase().includes(movieTitle)){
      const idx = movies.indexOf(movie);
      searchedMovies.push(idx);
      // searchedMoviesinnerHTML += `
      //     <div class="col">
      //       <div class="card h-100 ${idx}">
      //         <img src="https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}" class="card-img-top movie-poster ${idx}" alt="...">
      //         <div class="card-body movie-info">
      //           <h5 class="card-title movie-title">${movie.original_title}</h5>
      //         </div>
      //       </div>
      //     </div>
      //     `     
      searchedMoviesinnerHTML += `
        <div class="position-relative col" >
          <div class="card h-100 ${idx}">
            <img src="https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}" class="img-fluid w-100 h-100 object-fit-cover card-img-top movie-poster ${idx}" alt="이미지">
            <div class="position-absolute bottom-0 start-0 w-100 card-body movie-info" style="height: 20%; background-color: rgba(0, 0, 0, 0.5);">
              <div class="h-100 d-flex justify-content-center align-items-center">
                <p class="text-white m-0 card-title movie-title ${idx}">${movie.original_title}</p>
              </div>
            </div>
          </div>
        </div>
      ` 
    }
  }

  movieLi.innerHTML = searchedMoviesinnerHTML;
  movieTitleInput.value = '';
})

movieLi.addEventListener("click", function(e) {
  if (e.target.closest(".card")){
    const idx = e.target.closest(".card").classList[2]
    window.location.href=`movie.html?idx=${idx}`;
  }
})