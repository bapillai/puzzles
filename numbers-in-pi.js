//write a function that takes the string representation of Pi and a list of your favourite numbers and returns the smallest number of spaces that needs to be added to the n digits of Pi.

//Left to right Approach
function numbersInPi(pi,numbers){
    let numbersTable = {};
    for(number of numbers){
      numbersTable[number] = true;
    }
    let minSpaces = getMinSpaces(pi,numbersTable,{},0);
    return minSpaces === Infinity ? -1 : minSpaces;
  }
  
  function getMinSpaces(pi,numbersTable,cache,index){
    if(index === pi.length){
      return -1;
    }
    if(index in cache){
      return cache[index];
    }
    let minSpaces = Infinity;
    for(let i=index;i<pi.length;i++){
      let prefix = pi.slice(index,i+1);
      if(prefix in numbersTable){
        let minSpaceInSuffix = getMinSpaces(pi,numbersTable,cache,i+1);
        minSpaces = Math.min(minSpaces,minSpaceInSuffix+1);
      }
    }
    cache[index] = minSpaces;
    return cache[index];
  }
  
  console.log(numbersInPi("3141592653589793238462643383279",['3141592653589793238462643383279']));
  
  console.log(numbersInPi("3141592",['3141','5','31','2','4159', '9','42']));