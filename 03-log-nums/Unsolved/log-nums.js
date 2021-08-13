// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
  for(log = 1 ; num >= log ; log++){
  console.log(log);
  }

};


//pheudo: 1. value needs to start at one 2. value needs to track and log till final input

/* when I started this this probelem i was using the number
5 to test and was having inf logs of either 1 or 5..

from here i configured the loop to log one and moved onto the logic concerning
num (users input) and how it was relative to variable log of one.

I then incremented log++ with iterations of the loop till num was greater than initial log value.
this resulted in an accending log to the value of  input(5) -1 (1,2,3,4).

had to set the logical operator to >= greater than equal to to have the desired outcome.
*/