//Create a variable called word that contains a hangman word, and
//create a second variable called letter that indicates the letter that the player guessed.
//Print out "Yeah, the letter x exists y times in my word" if the letter exists
//(but substitute the actual letter and the number of times). If the letter doesn't exist,
//print out "Nope, that letter doesn't exist in my word."

(function(){


var word = "Yoda";
var letter = "d";  //change var to guess

var wordLetters = word.split("");  //declared a new variable in order to split word into an array - see methods in MDN site
console.log(wordLetters);

var count = (letter.match(/Y/g) || []).length;   // two vert lines mean or..also -


if(wordLetters.includes(letter)){
  console.log(`The letter ${letter} exists ${count} times in my word`);
}
else {
  console.log("Nope, that letter doesn't exist in my word");
}

})();


//template literals
