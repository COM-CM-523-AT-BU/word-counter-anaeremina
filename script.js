// put your globals here - hint: select elements from the HTML

const textBlock = document.getElementById("text-area");
const textCount = document.getElementById("wordCountInput")


// don't forget to add event listeners to teh buttons

textBlock.addEventListener("click", countWords);

function countWords() {
// your code here
    let words = textBlock.split(' ');
    let count = 0;
     for (var i = 0; i < words.length; i++) {
      if (words[i] != ""){
        count +=1 ;
      }
    }
    // call printData
    printData(count);
}

function findWords() {
  // put your local variable for the empty array here
  // remainder of your code follows
  // call printData
  const word = textArray.split(' ');
  let wordRepeated = 0;
  while (wordRepeated != -1) {
    wordRepeated = word.indexOf(i + 1);
    if (wordRepeated != -1) {
      wordRepeated.add(wordRepeated);
      wordRepeated++;
}
  }
  printData(wordRepeated);
}

// change param1 and param2 to identifiers that make sense
function printData(countWords, findWords) {
  // your code here... one line!
}
