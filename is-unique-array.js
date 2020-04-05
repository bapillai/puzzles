//Write a program to find if an array is unique or not.

var isUnique = function(array){
    let breadcrumbs = {};
    let result = true;
    for(let i=0;i<array.length;i++){
      if(breadcrumbs[array[i]]){
        result = false;
      }else{
        breadcrumbs[array[i]] = true;
      }
    }
    return result;
  }
  console.log(isUnique([1,1,2,3])=== true);