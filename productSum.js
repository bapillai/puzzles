// Product Sum Write a function to achieve the following
//Input Array: [x,y] . Output: x+y;
//Input Array: [x,[y,z]] . Output: x+2(y+z);=>x+ 2y+2z;

function productSum(array,multiplier = 1){
    let sum = 0;
    for(let element of array){
      if(Array.isArray(element)){
        sum += productSum(element,multiplier+1);
      } else {
        sum += element;
      }
    }
    return sum * multiplier;
  }
  
  productSum([5,2,[7,-1],3,[6,[-13,8],4]])