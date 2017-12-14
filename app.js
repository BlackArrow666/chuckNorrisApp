var firstNameGlobal = document.getElementById("fName");
var lastNameGlobal = document.getElementById("lName");
var generateButton = document.getElementById("generateJoke");

var handleResult = function (data) {
    console.log(data.value.joke);
    document.getElementById("joke").innerHTML = data.value.joke;
};


var generateJoke = function () {

    var firstName = firstNameGlobal.value;
    var lastName = lastNameGlobal.value;

    var url = "http://api.icndb.com/jokes/random?" +
        "firstName=" + firstName
        + "&lastName=" + lastName;

    makeAjaxRequest(url, handleResult);
};
generateButton.addEventListener("click", generateJoke);



