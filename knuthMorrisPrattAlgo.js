//KMP Algorithm
//Write a function that take two strings and determines whether the first string contain the second one or not.The output should be boolean.
//Time Complexity:O(N+M)-N is the number of characters in main string and M is the number of charaters in the sub string.It rests this concept on Pattern matching.
//Space Complexity:O(M)
//String Matching normally compares every character of the bring string with every character of the substring and so on.This is a naive string matching approach.So you keep rotating until all letters match.Time Complexity of this algorithm O(N to the power M).N is the number of characters in the main array and M is the number of characters of the sub array.

//eg: String - aefoaefcdaefcdaed
//SubString - aefcdaed
//The pattern is tracked by using a 1-D array.

function knuthMorrisPrattAlgo(string,substring){
    let pattern = buildPattern(substring);
    return doesMatch(string,substring,pattern);
  }
  
  function buildPattern(substring){
    let pattern = new Array(substring.length - 1).fill(-1);
    let j=0;
    let i=1;
    while(i<j){
      if(substring[i] === substring[j]){
        pattern[i] = j;
        i++;
        j++;
      } else if(j > 0){
        j = pattern[j - 1] + 1;
      } else {
        i++;
      }
    }
    return pattern;
  }
  
  function doesMatch(string,substring,pattern){
    let i = 0;
    let j = 0;
    while(i + substring.length - j <= string.length){
      if(string[i] === substring[j]){
        if(j === substring.length - 1) return true;
        i++;
        j++;
      } else if (j > 0){
        j = pattern[j - 1] + 1;
      } else {
        i++;
      }
    }
    return false;
  }
  
  console.log(knuthMorrisPrattAlgo("aefaefaefaedaefaedaefaefa","aefaedaefaefa"));
  console.log(knuthMorrisPrattAlgo('tesseatesgawatewtesaffawgfawtteafawtesftawfawfawfwfawftest', 'test'));