// put your globals here - hint: select elements from the HTML

const textArray = document.getElementById("form-label");

// don't forget to add event listeners to teh buttons

textArray.addEventListener("click", countWords);

function countWords() {
// your code here
    const words = textArray.split(' ');
    let count = 0;
     for (var i = 0; i < words; i++) {
      if (words[i]==" "){
        count ++;
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
