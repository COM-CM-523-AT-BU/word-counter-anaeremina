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
  const words = textArray.split(' ');
  let wordsRepeated = 0;
  while (word != -1) {
    word = graf.indexOf("e", i + 1);
    num += 1;
    i = wordsRepeated;
}
  printData(wordsRepeated)
}

// change param1 and param2 to identifiers that make sense
function printData(countWords, findWords) {
  // your code here... one line!
}
