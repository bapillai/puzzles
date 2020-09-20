/*Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
First Element: firstElement, where  is the first element in the sorted array.
Last Element: lastElement, where  is the last element in the sorted array.
Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.

For example, given a worst-case but small array to sort:  we go through the following steps:

swap    a       
0       [6,4,1]
1       [4,6,1]
2       [4,1,6]
3       [1,4,6]
It took  swaps to sort the array. Output would be

Array is sorted in 3 swaps.  
First Element: 1  
Last Element: 6  
Function Description

Complete the function countSwaps in the editor below. It should print the three lines required, then return.

countSwaps has the following parameter(s):

a: an array of integers .
Input Format

The first line contains an integer, , the size of the array .
The second line contains  space-separated integers .

Constraints

Output Format

You must print the following three lines of output:

Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
First Element: firstElement, where  is the first element in the sorted array.
Last Element: lastElement, where  is the last element in the sorted array.
Sample Input 0

3
1 2 3
Sample Output 0

Array is sorted in 0 swaps.
First Element: 1
Last Element: 3
Explanation 0
The array is already sorted, so  swaps take place and we print the necessary three lines of output shown above.

Sample Input 1

3
3 2 1
Sample Output 1

Array is sorted in 3 swaps.
First Element: 1
Last Element: 3
Explanation 1
The array is not sorted, and its initial values are: . The following  swaps take place:

At this point the array is sorted and we print the necessary three lines of output shown above.*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSwaps function below.
function countSwaps(a) {
    let arrLen = a.length - 1;
    let count = 0;
    while(arrLen > 0) {
        for(let i=0;i<arrLen;i++) {
            if(a[i] > a[i+1]) {
                a = swap(a,i,i+1);
                count++;
            }
        }
        arrLen--;
    }
    console.log("Array is sorted in "+ count + " swaps.\n"+ "First Element: "+a[0]+"\n"+ "Last Element: "+a[a.length - 1]+" \n");
}

function swap(arr,i1,i2) {
    arr[i1] = arr[i1] ^ arr[i2];
    arr[i2] = arr[i1] ^ arr[i2];
    arr[i1] = arr[i1] ^ arr[i2];
    return arr; 
}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
