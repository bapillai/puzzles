//Write a function that takes in an array of integers and returns an array of all the permutations of its integers.

function getPermutations(array){
    let permutation = [];
    permutationHelper(array,[],permutation);
    return permutation;
  }
  
  function permutationHelper(array,currentPermutation,permutation){
    if(!array.length && currentPermutation.length){
      permutation.push(currentPermutation);
    } else {
      for(let i=0;i<array.length;i++){
        const newArray = array.slice(0,i).concat(array.slice(i+1));
        const newPermutation = currentPermutation.concat([array[i]]);
        permutationHelper(newArray,newPermutation,permutation);
      }
    }
  }
  
  console.log(getPermutations([1,2,3,4]));