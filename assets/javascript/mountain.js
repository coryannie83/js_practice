//Create an array that contains a bunch of numbers representing the
//heights of various mountains. Write some code that
//identifies the height of the tallest of the available mountains and prints it out.

var Chocorua = 267;
var Ossipee = 306;
var Major = 108;


var mountainArray = [Chocorua, Ossipee, Major];

var largestmountain = Math.max.apply(Math, mountainArray);

console.log(largestmountain);
