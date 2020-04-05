//Find the number of prime numbers and list them from a numeric array
function findPrime(numArray){
    numArray = numArray.filter((number) =>{
      for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i === 0){
          return false;
        }
      }
      return true;
    });
    return {
      primeNumberArray: numArray,
      numberOfPrime: numArray.length
    };  
  }
  
  
  console.log(findPrime([2,3,4,5,6,7,8,9,10]));