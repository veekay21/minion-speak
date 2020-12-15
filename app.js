// var userName = prompt("What's your name?");
// alert("Welcome to JS on browser. " + userName);

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txtInput");  
// var Output = document.querySelector("#divOutput");
var translateURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(textInput) {
    return translateURL + "?" + "text=" + textInput;
}

function errorHandler(error) {
    console.log("some error occured", error);
}

btnTranslate.addEventListener("click", function clickEvent() {
    // console.log("Clicked!");
    // console.log(textInput.value);
    // Output.innerHTML = "banana bros";
    var inputText = textInput.value;

    fetch(getURL(inputText))
    .then(response => response.json())
    .then(json => {
         var result = json.contents.translated; 
        // console.log(json);
        document.querySelector("#divOutput").innerHTML = result; 
    })
    .catch(errorHandler);
    
})