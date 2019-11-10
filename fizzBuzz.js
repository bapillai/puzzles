/*
    Given a number n,for each integer i in the range from 1 to n inclusive,print one value per line as follows:
    1)If i is a multiple of both 3 and 5,print Fizzbuzz
    2)If i is a multiple of 3(but not 5),print Fizz
    3)If i is a multiple of 5(but not 3),print Buzz.
    4)If i is not a multiple of 3 or 5,print the value of i.
*/

function fizzBuzz(array){
    for(let i=0;i<array.length;i++){
      if((array[i]%3 !== 0) && (array[i]%5 !== 0)){
        console.log(array[i]+"\n");
      }else if((array[i]%3 !== 0) &&(array[i]%5 === 0)){
        console.log("Buzz "+"\n");
      }else if((array[i]%3 === 0) &&(array[i]%5 !== 0)){
        console.log("Fizz "+"\n");
      }else if((array[i]%3 === 0) &&(array[i]%5 === 0)){
        console.log("FizzBuzz "+"\n");
      }
    }
  }
  
  fizzBuzz([27,35,32,33,3,45])