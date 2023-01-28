//import data from "./data/wordlist.json" assert {type: 'json'};

const data = await fetch('./src/data/wordlist.json')
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
        console.log("you pressed enter");
    } else if (id == "backspace") {
        console.log('you pressed backspace');
    } else {
        console.log('you pressed ' + id);
    }
}

function main() {
    console.log(data);
    var targetWord = retrieveWord(data);
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