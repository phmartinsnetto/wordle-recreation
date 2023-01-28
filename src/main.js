//import data from "./data/wordlist.json" assert {type: 'json'};

const wordList = await fetch('./src/data/wordlist.json')
    .then(response => response.json());      

function generateRandomNumber() {
    let today = new Date();
    let randNum = Number((today.getUTCDate().toString() + today.getUTCFullYear().toString() + today.getUTCMonth().toString()));
    return randNum;
}

function retrieveWord(wordList) {
    let randNum = generateRandomNumber();
    randNum = randNum%Object.keys(wordList).length;
    return wordList[randNum];
}

function handleButtonClick(id) {
    if (id == "enter") {
        enterButtonClick();
    } else if (id == "backspace") {
        console.log('you pressed backspace');
    } else {
        letterButtonClick(id);
    }
}

function letterButtonClick(id) {
    if (pos <= 4) {
        document.getElementById("row-" + row).getElementsByClassName("tile")[pos].innerHTML = id;
        pos++;
        wordGuess.push(id);
        console.log(wordGuess);
    }
}

function backspaceButtonClick() {

}

function enterButtonClick() {
    var guess = wordGuess.join("").toLowerCase();
    if (Object.values(wordList).includes(guess)) {
        row++
        pos = 0

        console.log("a palavra existe na lista");
        console.log ("a expressão é: " + Object.values(wordList).includes(guess))
    }

}

var row = 1;
var pos = 0;
var wordGuess = [];

function main() {
    console.log(wordList);
    var targetWord = retrieveWord(wordList);
    console.log(targetWord);

    // code below adds an event listener to all keyboard buttons,
    // and pass their id to the handler function
    document.querySelectorAll('.key-btn')
  .forEach(item => {
    item.addEventListener('click', function() {
      handleButtonClick(this.id);
    })
  });
}

// this function runs when the DOM is ready, i.e. when the document has been parsed
document.addEventListener('load', main());