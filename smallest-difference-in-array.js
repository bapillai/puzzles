//Sample Input: [-1,5,10,20,28,3],[26,134,135,15,17]
//Sample Output: [28,26]
function smallestDifference(arrayOne,arrayTwo){
    arrayOne.sort((a,b)=>a-b);
    arrayTwo.sort((a,b) => a-b);
    let indexOne = 0;
    let indexTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];
    while(indexOne < arrayOne.length && indexTwo < arrayTwo.length){
      let firstNum = arrayOne[indexOne];
      let secondNum = arrayTwo[indexTwo];
      if(firstNum < secondNum){
        current = secondNum - firstNum;
        indexOne++;
      }else if(firstNum > secondNum){
        current = firstNum - secondNum;
        indexTwo++;
      }else{
        return [firstNum, secondNum];
      }
      if(smallest > current){
        smallest = current;
        smallestPair = [firstNum,secondNum];
      }
    }
    return smallestPair;
}

console.log("The smallest pair is: ",smallestDifference([-1,5,10,20,28,3],[26,134,135,15,17]))