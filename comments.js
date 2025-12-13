const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeWdvdWJka2VoYmNraGFvbW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDY3MzYsImV4cCI6MjA4MDM4MjczNn0.z0e3pKF4YvDuP3vHBJEvd8BWQfkuB4NJsEGjrlfB4JQ";

const baseUrl = "https://bdygoubdkehbckhaomol.supabase.co/rest/v1/";

function renderUserName() {

  let userNameNavBar = document.getElementById("userNameNavBar");

  let userName = localStorage.getItem("userName");

  userNameNavBar.innerHTML += `, ${userName}`;

  getReviews();

}


async function createReview() {

  event.preventDefault();

  const url = `${baseUrl}reviews`;

  let movie = document.getElementById("movieTitle").value;
  let comment = document.getElementById("movieComment").value;
  let rating = document.getElementById("movieRating").value;

  let review = {
    movie: movie,
    comment: comment,
    rating: rating
  }

  const response = await fetch(url, {
    method: "POST", // This is method used to add elements to the table
    headers: {
      apikey: token, // pass api token (security)
      'Content-Type': "application/json" // data type 
    },
    body: JSON.stringify(review) // data sent to the api
  })


  document.getElementById("movieTitle").value = "";
  document.getElementById("movieComment").value = "";
  document.getElementById("movieRating").value = "";

  window.location.reload();


}


async function getReviews() {

  const url = `${baseUrl}reviews`;
  const response = await fetch(url, {
    method: "GET", // This is method is used to read tables
    headers: {
      apikey: token // pass api token (security)
    }
  })

  const data = await response.json();

  let table = document.getElementById("userReviews");

  for (let i = 0; i < data.length; i++) {

    table.innerHTML += `
    <tr>
        <th scope="col">${data[i].id}</th>
        <td>${data[i].movie}</td>
        <td>${data[i].comment}</td>
        <td>${data[i].rating}</td>
    </tr>
    `;

  }

}