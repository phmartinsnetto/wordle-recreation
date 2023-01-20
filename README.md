# wordle-recreation
Functional recreation of the web game Wordle, using HTML, CSS and Javascript.

In this document I'll register the steps by which I'll build the code and the rationale behind each step of the development.
* I'm by no means a pro, quite the contrary, so this surely won't be an optimal way of achieving the "Wordle App" result, I'll simply write my steps
so later I can have a somewaht detailed record of what has been done and why. I'm sure an experienced programmer will be able to accomplish the same tasks in
more elegant and intelligent fashion, but I just thought that it would be more fun if I didn't follow any particular tutorial. Actually, the tutorials I usually find for specific apps and stuff too direct in terms of code, and I end up feeling that I'm just copying and not learning. But well, that's enough babbling.

-------------------------------------     1) Step One: So, what's the game all about?        ---------------------------------------------------------

First thing I did was actually playing the game, so I went to their site (https://www.nytimes.com/games/wordle/index.html) and played it once. I did have played
this game in the past, so I still remember it well and one playthrough now was enough for me to remember the game's aspects. basically:
  - There is a word of six letters that you have to guess. The word is in English, and people's names seem not to be included in the possibilities.
  - You have 6 tries. In each try you make a guess of a word and you win the game if you get the word right.
  - If you guess wrong, the game will inform which letters of your guess are part of the target word. The game does that by coloring green the letters that are
  part of the word AND are in the exact same position in both the guess and target word. The game will color in yellow the letters that are part of the target
  word, but are in the wrong place. Finally, the game will color them black if they aren't part of the word.
 
There is also a cool feature in the game, that it shows a different word every day, and you have only one daily playthrough to get it right. If you miss it, you
got to wait until next day to try again, and then it'll be a new word. Not only that, but if another person tries the game in another device/machine, they'll be 
challenged with the exact same word as you. So these features should also be included in the game.


--------------------------------------      2) Step Two: Structuring the game screen        ------------------------------------------------------------

Looking at the game webpage, I identified a top navigation menu with the title, some links to other games, a settings menu and a button that pops a window
and show the game rules. I decided to include the title bar and the rules button, the rest I'll leave out. I'll try to do that with <nav> tag and a button,
maybe.
Bellow there are the character's slots for all the words, already in display and in blank. I think I'll do them using <label> tags.
And finally we have a keyboard, qwerty letters, Backspace and Enter buttons. So I'll think it's <button> tags for those.
I structured that in a .html file and that'll be index.html, the file to be initially loaded and make the game show up in the browser.
