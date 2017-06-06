// Create a variable called word that stores a word we want to test as a palindrome.
// Write some code that prints out "true" if word is a palindrome, or "false" if its not.


(function(){


var word = ["m", "o", "m"];

 var reverse = word.reverse();
 console.log(reverse)

var result = (word == reverse) ? "true":"false";

console.log(result)


})();
