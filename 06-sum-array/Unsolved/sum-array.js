// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {

  let result = 0;

  for(var i = 0; i < arr.length; i++){
    let currentIndex = arr[i]
    result += currentIndex;
  }
  return result;

};

/* using  a results variable we can use this to accumilate total throughout the loops,
we assign a variable to each index of the array (as its location moves) current index is added to the result. */




