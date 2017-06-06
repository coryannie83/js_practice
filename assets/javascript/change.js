// Imagine we have a very versatile change machine.
// Create a variable called amount stores a quantity of dollars,
// and write some code that produces an array that indicates the number
//  of 1, 5, 10, and 20 bills that the change machine should return.
//  You want the change machine to return the smallest number of bills possible.
//
// After your code runs you should have a new array of the format
//  [twenties, tens, fives, ones]. For example, if amount = 47, you should print an
//  array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).

(function(){

  var amount = 77;
  var twenty = 20;
  var ten = 10;
  var five = 5;
  var one = 1;

  var twentycount = parseInt(amount / twenty); //3
  //console.log(twentycount)

  var twentiesleftover = amount % twenty; //17
  //console.log(twentiesleftover)

  var tenscount = parseInt(twentiesleftover/ten);  //1
//  console.log(tenscount)

  var tensleftover = twentiesleftover % ten; //7
//  console.log(tensleftover)

  var fivescount = parseInt(tensleftover/five); //1
  //console.log(fivescount)

  var fivesleftover = tensleftover % five; //2
  //console.log(fivesleftover)

  var onescount = parseInt(fivesleftover/one); //2
  //console.log(onescount)

 var countArray = [twentycount, tenscount, fivescount, onescount];
 console.log(countArray)


})();
