// put your globals here - hint: select elements from the HTML

const text = document.getElementById("text-area");
const textOutput = document.getElementById("wordCountInput");
const find = document.getElementById("findWordInput");
const findOutput = document.getElementById("wordFoundInput");


// don't forget to add event listeners to the buttons

text.addEventListener("click", countWords);
find.addEventListener("click", findWords);

// function that counts words

function countWords() {
  // your code here
      let conversion = text.toString();
      let words = conversion.split(' ');
      let count = 0;  
       for (var i = 0; i < words.length; i++) {
        if (words[i] != ""){
          count +=1; 
        }
      }
      // call printData
      printData(count, findOutput);
  }

   // count instances of a word, use filter or forEach
function findWords() {
  let foundWords = [];
  // put your local variable for the empty array here
  // remainder of your code follows
  for(var i = 0; i < text.length; ++i) {
    if(!foundWords[text[i]])
    foundWords[text[i]] = 0;   
    ++foundWords[text[i]];
}
 // call printData
  printData(foundWords, textOutput);
}

// change param1 and param2 to identifiers that make sense
function printData(message, destination) { 
  destination.value = message; 
}

