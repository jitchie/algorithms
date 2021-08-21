// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let numberOfVowels = 0;
  let vowels = ["a","e","i","o","u"];
  let length = str.length;
  
  for(i=0;i<length;i++){
    let current = str[i].toLowerCase();
    if(vowels.indexOf(current) !== -1){
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
};


/*
1. define variable to hold count
2. define vowels array to check against
3. loop through array
4. define current instance of array
5. logic, indexOf returns -1 if something is not present, using the Bang or NOT
opperator we are essentially stating if  the number is not a value of -1 a vowel is present, run block and increment count.
*/