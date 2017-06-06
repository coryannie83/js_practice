// There's a mythical species of rabbit called the Cherokee Hare that can reproduce at variable
//  rates and never seem to die. Fortunately, some engineers figured out to write some code to
//  describe it's future population. Wildlife experts rejoice! Create a variable called
//  startingPopulation that keeps track of the initial population of hares, a variable called
//  birthRate that keeps track of what percentage is born each week, and a variable called
//  numberOfWeeks that represents how long we're trying to simulate. Print out
//   "There will be x Cherokee Hares after y weeks" but replace x with the number of hares
//   and y with the number of weeks.
//
// Note: it's common practice to represent rates (like the birth rate) as
// decimal values, i.e. 10% would be 0.1 instead of 10.

(function(){

  var startingPopulation = 2000;
  var birthRate = .22;
  var numberOfWeeks = 5;

  var increaseperweek = startingPopulation * birthRate;
  console.log(increaseperweek)

  var fiveweeks = increaseperweek * numberOfWeeks;
  console.log(fiveweeks)

  var total = startingPopulation + fiveweeks;
  console.log(total)

  console.log("There will be " + total + " Cherokee hares after " + numberOfWeeks + " weeks")



})();
