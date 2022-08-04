import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'results', 'input' ]

  connect() {
    console.log('Hello from movies_controller.js')
    this.fetchOmdbAPI("star wars")

    // search.addEventListener("click", searchMovies);
  }

  displayMovies(movies) {
    // const results = document.querySelector("#results");
    this.resultsTarget.innerHTML = "";
    movies.forEach((movie) => {
      this.resultsTarget.insertAdjacentHTML(
        'beforeend',
        `<li class='list-inline-item'>
        <img height="120" src="${movie.Poster}" alt="poster" />
        </li>`);
    });
  };
    
  fetchOmdbAPI(keyword) {
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search;
      this.displayMovies(movies);
    })
  };
  
  searchMovies(event) {
    // const input = document.querySelector("#keyword");
    event.preventDefault(); 
    this.fetchOmdbAPI(this.inputTarget.value);
  };
}