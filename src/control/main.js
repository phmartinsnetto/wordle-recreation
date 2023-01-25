import * as data from '../model/data/wordlist.json' assert {type: 'json'}
import * as Word from '../model/Word.js'

/* document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    main();
    
}); */

function main() {
    const wordList = JSON.parse(data);
    console.log(wordList);

}

main();