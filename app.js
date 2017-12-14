var firstNameGlobal = document.getElementById("fName");
var lastNameGlobal = document.getElementById("lName");
var generateButton = document.getElementById("generateJoke");

function init() {
    generateButton.addEventListener("click", generateJoke);
}

function generateJoke() {

    var firstName = firstNameGlobal.value;
    var lastName = lastNameGlobal.value;

    var url = "http://api.icndb.com/jokes/random?" +
        "firstName=" + firstName
        + "&lastName=" + lastName;

    makeAjaxRequest(url, handleResult);
}

function handleResult (data) {

    console.log(data.value.joke);
    document.getElementById("joke").innerHTML = data.value.joke;
}

init();






