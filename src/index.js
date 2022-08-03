// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select elements (button)
// const button = document.querySelector("#click-me");

// // 2. Listen to an even (click on button)
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (change innerText, disable)
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
// });


// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (search, input, results)
const search = document.querySelector("#submit");
const input = document.querySelector("#keyword");
const results = document.querySelector("#results");
console.log("Element selected!");
// 2. Listen to an event (click on search)
search.addEventListener("click", (event) => {
  console.log("Just clicked!");
  // We need to prevent to default refresh of the page
  event.preventDefault(); 
  console.log(event);
  // 2.5 Fetch OmDB API, get the movie data
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  // const movies = fetch(url) NOT WORKING!
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    console.log("Data arrived!");
    // 3. Change the DOM (display the movies)
    results.innerHTML = "";
    const movies = data.Search;
    movies.forEach((movie) => {
      results.insertAdjacentHTML(
        'beforeend',
        `<li class='list-inline-item'>
          <img src="${movie.Poster}" alt="poster" />
          <p>${movie.Title}</p>
        </li>`);
    });
  })
  console.log("That's after the fetch in the JS!");
});


// //////////////////////
// HTTP POST request
// //////////////////////
const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  // 2.5 Fetch an API
  const data = {
    email: emailValue, 
    password: passwordValue
  };

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  };

  fetch("https://reqres.in/api/register", options)
    .then(response => response.json())
    .then((data) => {
      // 3. Change DOM
      console.log(data);
    })
}

// 1. select elements
const form = document.querySelector("#form")
// 2. listen to a submit
form.addEventListener("submit", signUp)