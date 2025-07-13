import { movies } from "../data/movieList.js";

const movieTitleInput = document.querySelector("#movie-title");
const searchMovieForm = document.querySelector(".search-movie");
const searchedMoviesList = document.querySelector(".searched-movie-list");

searchMovieForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const movieTitle = movieTitleInput.value.trim().toLowerCase();
  clearSearchUI();
  renderSearchedMoviesList(movieTitle);
});

searchedMoviesList.addEventListener("click", function (e) {
  if (e.target.closest(".card")) {
    const idx = e.target.closest(".card").classList[2];
    if (isNaN(idx)) return;
    window.location.href = `movie.html?idx=${idx}`;
  }
});

function clearSearchUI() {
  searchedMoviesList.classList =
    "row row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-4 searched-movie-list";
  searchedMoviesList.innerHTML = ``;
  movieTitleInput.value = "";
}

function renderSearchedMoviesList(movieTitle) {
  let searchedMoviesinnerHTML = "";
  for (const idx in movies) {
    if (movies[idx].title.toLowerCase().includes(movieTitle)) {
      searchedMoviesinnerHTML += `
        <div class="position-relative col" >
          <div class="card h-100 ${idx}">
            <img src="https://image.tmdb.org/t/p/w440_and_h660_face${movies[idx].poster_path}" class="img-fluid w-100 h-100 object-fit-cover card-img-top movie-poster" alt="이미지">
            <div class="position-absolute bottom-0 start-0 w-100 card-body movie-info" style="height: 20%; background-color: rgba(0, 0, 0, 0.5);">
              <div class="h-100 d-flex justify-content-center align-items-center">
                <p class="text-white m-0 card-title movie-title">${movies[idx].original_title}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  if (!searchedMoviesinnerHTML) {
    searchedMoviesList.classList = "row row-cols-1 searched-movie-list";
    searchedMoviesinnerHTML = `
      <div class="position-relative col">
        <div class="card">
          <p class = "text-center warning">검색 결과가 없습니다 😖<p>
        </div>
      </div>
    `;
  }

  searchedMoviesList.innerHTML = searchedMoviesinnerHTML;
}
