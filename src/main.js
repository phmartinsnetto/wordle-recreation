/* document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    main();
    
}); */
var data = require('../model/data/wordlist.json');

function generateRandomNumber() {
    let today = new Date();
    let randNum = Number((today.getUTCFullYear().toString() + today.getUTCMonth().toString() + today.getUTCDate().toString()));
    return randNum;
}

function retrieveWord(wordList) {
    let randNum = generateRandomNumber();
    randNum = randNum%Object.keys(wordList).length;
    return wordList[randNum];
}

function main() {
    var targetWord = retrieveWord(data);
    console.log(targetWord);

}

main();