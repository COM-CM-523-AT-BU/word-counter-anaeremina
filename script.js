// put your globals here - hint: select elements from the HTML

const text = document.getElementById("text-area");
const wordCountInput = document.getElementById("wordCountInput");
const countBtn = document.getElementById ("countBtn");
const wordFind = document.querySelector ("wordFoundInput");
const findBtn = document.getElementById ("findBtn");

// don't forget to add event listeners to the buttons

countBtn.addEventListener ("click", countWords);
findBtn.addEventListener ("click", findWords);

// function that counts words
function countWords() {
  let words = text.value.split(' ');
        let count = 0;  
         for (var i = 0; i < words.length; i++) {
          if (words[i] != ""){
            count +=1; 
          }
        }
        // call printData
        printData(count, wordCountInput); 
    }
  
     // count instances of a word, use filter or forEach
  function findWords() {
    let foundWords = [];
    var textArr = text.value.split(' ');  // assuming each word in the phrase is separated by a space
    textArr.forEach(function(word){
      // only continue if this word has not been seen before
      if(!foundWords.hasOwnProperty(word)){
        foundWords[word] = wordFind.match(/word/g).length;
      }
   });
  printData(foundWords, wordFind);
  }

  
  // change param1 and param2 to identifiers that make sense
  function printData(message, destination) { 
    destination.value = message; 
  }
  