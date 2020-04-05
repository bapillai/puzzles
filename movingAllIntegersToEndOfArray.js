//Given an array and an integer.Move all the elements of the array which are the same as the integer to the end of the array
//If we implement a solution with Sorting then we have a time complexity of O(Nlog(N));
//We can write a solution for O(N),ie linear time in time complexity and space complexity is O(1) as well.No Data structures needed.

function moveElementToEndOfArray(array,toMove){
    let i = 0;
    let j = array.length - 1;
    while(i < j){
      while(array[j] === toMove && i < j){
        j--;
      }
      if(array[i]=== toMove){
        swap(i,j,array);
      }
      i++;
    }
    return array;
  };
  
  function swap(i,j,array){
   let temp = array[j];
   array[j] = array[i];
   array[i] = temp;
  }
  
  console.log(moveElementToEndOfArray([2,1,2,2,2,3,4,5,2],2));
  console.log(moveElementToEndOfArray([5,4,3,2,1],5));
  console.log(moveElementToEndOfArray(["ab","cde","abc","xyq","xyz"],"ab"));