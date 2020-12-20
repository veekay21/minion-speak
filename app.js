// var userName = prompt("What's your name?");
// alert("Welcome to JS on browser. " + userName);

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txtInput");  
var outputDiv = document.querySelector("#divOutput");

var translateURL = "https://api.funtranslations.com/translate/minion.json";


function getURL(input) {
    return `${translateURL}?text=${input}`;
}

function errorHandler(error) {
    console.log("some error occured", error);
}

function clickEvent() {
    var inputText = textInput.value;

    fetch(getURL(inputText))
    .then(response => response.json())
    .then(json => {
         var result = json.contents.translated; 
        // console.log(json);
        outputDiv.innerText = result; 
    })
    .catch(errorHandler);    
}

btnTranslate.addEventListener("click", clickEvent);