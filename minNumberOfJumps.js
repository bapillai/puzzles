//Given an integer array where each element shows us a step to move forward/backward.eg:if element at index 1 is 3 we can take 3 steps forward in the array and so on.
function minNumberOfJumps(array){
    if(array.length === 1){
      return 0 ;
    }
    let jumps = 0;
    let steps = array[0];
    let maxReach = array[0];
    for(let i=1;i<array.length;i++){
      maxReach = Math.max(maxReach,array[i]+i);
      steps--;
      if(steps ===0){
        jumps++;
        steps = maxReach - i;
      }
    }
    return jumps + 1;
  }
  
  
  console.log(minNumberOfJumps([3,4,2,1,2,3,7,1,1,1,3]));