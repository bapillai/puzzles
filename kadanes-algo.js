//Write a function that takes an integer array as an input and return the maximum sum of the elements in a sub-array used to calculate the sum in a non-empty array format.
//This problem is called maximum sub array problem
//the Maximun number ending here  = Maximum(maxEndingHere + Number,number)

function kadanesAlgo(array){
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for(let i=1;i<array.length;i++){
      let num = array[i];
      maxEndingHere = Math.max(num,maxEndingHere+num);
      maxSoFar = Math.max(maxSoFar,maxEndingHere);
    }
    return maxSoFar;
  }
  
  console.log(kadanesAlgo([3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]))
  
  