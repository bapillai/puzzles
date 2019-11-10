//Find a way to print an array in the following format:[1st highest,1st lowest,2nd highest,2nd lowest.......] from a given array in random order.
function meanderingArray(unsortedArray){
    let sortedArray = unsortedArray.sort((a,b) =>a-b);
    let tempArray = [];
    let arrayIndex = 0;
    let arrayLen = sortedArray.length;
    for(let i=0,j=arrayLen-1;i<arrayLen/2 || j>arrayLen/2;i++,j--){
        tempArray[arrayIndex] = sortedArray[j];
        arrayIndex++;
        tempArray[arrayIndex] = sortedArray[i];
        arrayIndex++;
    }
    for(let i=0;i<tempArray.length;i++){
        sortedArray[i]= tempArray[i];
    }
    return sortedArray;
}

console.log(meanderingArray([4,5,1,8,2,7,3]));