/* Digits within an integer go from least significant to most significant from left to right.For instance,in a decimal number,the ones digit is less significant than the tens digit
Given a decimal number,convert it to binary and then determine the value,1 or 0, at the 4th least significant digit.
For example, 23 in binary is 10111.the 4th bit from right is 0.*/
function binaryFinder (num){
    let binary = parseInt(num,10);
    let tempArray = binary.toString(2);
    return tempArray[tempArray.length - 4];
}

console.log(binaryFinder(12));