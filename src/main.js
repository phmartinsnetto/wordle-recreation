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
        backspaceButtonClick(id);
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
    if (pos == 0) {
        document.getElementById("row-" + row).getElementsByClassName("tile")[pos].innerHTML = "";
    } else {
        pos--;
        document.getElementById("row-" + row).getElementsByClassName("tile")[pos].innerHTML = "";
        if (wordGuess.length > 0) {
            wordGuess.pop();
            console.log(wordGuess);
        }
    }

}

function enterButtonClick() {
    var guess = wordGuess.join("").toLowerCase();
    if (Object.values(wordList).includes(guess)) {
        compareWords(guess, targetWord);

        console.log("a palavra existe na lista");
        console.log ("a expressão é: " + Object.values(wordList).includes(guess))
    } else {
        alert("Type a valid word, please.")
    }
}

function compareWords(guess, targetWord) {
    var arrGuess = [...guess]
    var arrTarget = [...targetWord]

    for (let i = 0; i < 5; i++) {
        if (arrTarget.includes(arrGuess[i])) {
            if (arrTarget[i] == arrGuess[i]) {
                console.log(arrGuess[i] + " green");
                //changing tile color
                document.getElementById("row-" + (row)).getElementsByClassName("tile")[i].style.backgroundColor = "#6aaa64";

                //changing keyboard color
                document.getElementById(arrGuess[i].toUpperCase()).style.backgroundColor = "#6aaa64";
            } else {
                console.log(arrGuess[i] + " yellow");
                document.getElementById("row-" + (row)).getElementsByClassName("tile")[i].style.backgroundColor = "#c9b458";

                if (document.getElementById(arrGuess[i].toUpperCase()).style.backgroundColor != "rgb(106, 170, 100)") {
                    console.log("a cor é: " + document.getElementById(arrGuess[i].toUpperCase()).style.backgroundColor);
                    document.getElementById(arrGuess[i].toUpperCase()).style.backgroundColor = "#c9b458";
                }
                
            }
        } else {
            console.log(arrGuess[i] + " not in the word");
            document.getElementById("row-" + (row)).getElementsByClassName("tile")[i].style.backgroundColor = "#86888a";

            document.getElementById(arrGuess[i].toUpperCase()).style.backgroundColor = "#86888a";
        }
    }
    row++;
    pos = 0;  
    wordGuess = [];
}



var row = 1;
var pos = 0;
var wordGuess = [];
var targetWord = retrieveWord(wordList);

function main() {
    console.log(wordList);
    console.log(targetWord);

    // code below adds an event listener to all keyboard buttons,
    // and pass their id to the handler function
    document.querySelectorAll('.key-btn').forEach(item => {
        item.addEventListener('click', function() {
            handleButtonClick(this.id);
        })
    });
}

// this function runs when the DOM is ready, i.e. when the document has been parsed
document.addEventListener('load', main());