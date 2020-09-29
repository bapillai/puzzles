/*In an array, , the elements at indices  and  (where ) form an inversion if . In other words, inverted elements  and  are considered to be "out of order". To correct an inversion, we can swap adjacent elements.

For example, consider the dataset . It has two inversions:  and . To sort the array, we must perform the following two swaps to correct the inversions:

Given  datasets, print the number of inversions that must be swapped to sort each dataset on a new line.

Function Description

Complete the function countInversions in the editor below. It must return an integer representing the number of inversions required to sort the array.

countInversions has the following parameter(s):

arr: an array of integers to sort .
Input Format

The first line contains an integer, , the number of datasets.

Each of the next  pairs of lines is as follows:

The first line contains an integer, , the number of elements in .
The second line contains  space-separated integers, .
Constraints

Output Format

For each of the  datasets, return the number of inversions that must be swapped to sort the dataset.

Sample Input

2  
5  
1 1 1 2 2  
5  
2 1 3 1 2
Sample Output

0  
4   
Explanation

We sort the following  datasets:

 is already sorted, so there are no inversions for us to correct. Thus, we print  on a new line.
We performed a total of  swaps to correct inversions.*/


'use strict';

const fs = require('fs');

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

// Complete the countInversions function below.
function countInversions(arr) {
    if(Array.isArray(arr) && arr.length > 1) {
        let result = mergeSortIterative(arr);
        if(JSON.stringify(result.sortedObj) == JSON.stringify(arr)){
            return 0;
        } else {
            return result.count;
        }
    }
}

function mergeSortIterative(arr) {
    let splitArr = arr.map(function(element){return [element]});
    let totalCount = 0;
    while(splitArr.length > 1) {
        let resultObj = [];
        for(let i=0;i<splitArr.length;i+=2) {
            if(splitArr[i+1]) {
                let response = merge(splitArr[i],splitArr[i+1]);
                resultObj.push(response.result);
                totalCount = response.count;
            } else {
                resultObj.push(splitArr[i]);
            }
        }
        splitArr = resultObj;
    }
    return {count:totalCount, sortedObj: splitArr[0]};
}

function merge(left,right) {
    let result = [];
    let iLeft = 0,iRight = 0;
    let count=0;
    while(result.length < (left.length+right.length)){
        if(iLeft === left.length) {
            result = result.concat(right.slice(iRight));
        } else if(iRight === right.length) {
            result = result.concat(left.slice(iLeft));
        } else if(left[iLeft] <= right[iRight]) {
            result.push(left[iLeft++]);
        } else {
            result.push(right[iRight++]);
        }
        ++count;
    }
    console.log("output: "+result);
    return {result:result,count:count};
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = countInversions(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
