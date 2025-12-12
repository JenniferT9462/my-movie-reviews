const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeWdvdWJka2VoYmNraGFvbW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDY3MzYsImV4cCI6MjA4MDM4MjczNn0.z0e3pKF4YvDuP3vHBJEvd8BWQfkuB4NJsEGjrlfB4JQ";

const baseUrl = "https://bdygoubdkehbckhaomol.supabase.co/rest/v1/";

function renderUserName(){

    let userNameNavBar = document.getElementById("userNameNavBar");

    let userName = localStorage.getItem("userName");

    userNameNavBar.innerHTML += `, ${userName}`;

    getMovies();

}

async function getMovies(){

    const url = `${baseUrl}movies`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            apikey: token
        }
    });

    const data = await response.json();

    console.log(data);

    let movieReport = document.getElementById("movieReport");

    for (let i = 0; i <data.length; i++){
        movieReport.innerHTML += `<div class="col-lg-6">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${data[i].image_url}"
                  class="img-fluid rounded-start object-fit-cover h-100"
                  alt="${data[i].name}"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data[i].name}</h5>
                  <p class="card-text">
                    ${data[i].summary}
                  </p>

                  <a class="btn btn-danger" href="comments.html"
                    >Leave a Review</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>`
    }


}