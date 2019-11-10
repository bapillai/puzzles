function numberPairSum(array,numberElt){
    let finalArray = [];
      for(let i=0;i<array.length;i++){
          let firstElement = array[i];
          for(let j=i+1;j<array.length;j++){
              let secondElement = array[j];
              if(firstElement+secondElement === numberElt){
                  finalArray.push([firstElement,secondElement].sort((a,b)=>a-b));
              }
          }
      }
      return finalArray;
  }
  
  numberPairSum([1,2,3,4,-5,0,6,7,-3,-2],5);