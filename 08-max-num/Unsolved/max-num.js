// Write code to return the largest number in the given array

var maxNum = function(arr) {
  let output = arr[0]

  for (i = 0 ; i < arr.length; i++){
    let currentNum = arr[i];

    if(currentNum > output){
      output = currentNum
    }
    
  }
  return output;
}

/*
first we set the output to equal the first value in the array, this will be used for comparrisons.
we set up a for loop, to continue throught the array.
we define a variable that is equal to the index of the array
and provide an if statment that updates and reassigns the value of our output if the current 
number in the array is bigger than the previous.
*/
  
  




//input and array
//array is looped over
//biggest number is returned
//each number is compared to the previous value