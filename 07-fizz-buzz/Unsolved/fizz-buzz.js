// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {

  for (var i = 0; i < arr.length; i ++){
    let index = arr[i];

    if(index % 15 === 0){
      console.log("Fizz Buzz");
    } else if(index % 3 === 0){
      console.log("Fizz");
    } else if(index % 5 === 0){
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
};

/* I had the logic set up correctly, but in the wrong order for control flow...
if my index % 15 statment was at the bottom and my input was 15 my function would output buzz, and never reach fizz buzz.

biggest take away from this game is to accertain if certain conditions could cause the function to output before its expected
behaviour */