console.log("Hello");

var handleResult = function(data){
    console.log(data.value.joke);
    document.getElementById("joke").innerHTML = data.value.joke;
};

var url = "http://api.icndb.com/jokes/random?firstName=Ionica&lastName=Petrescu";

makeAjaxRequest(url, handleResult);