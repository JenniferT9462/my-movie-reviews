function logIn(){

    event.preventDefault()

    let userName = document.getElementById("userName").value;

    localStorage.setItem("userName", userName);

    window.location = "movies.html";

}