//Write a function that takes a given string and then returns its longest palindrome substring.

function longestPalindromicString(string){
    let currentLongest = [0,1];
    for(let i=1;i<string.length;i++){
      let odd = getLongestPalindromFrom(string,i-1,i+1);
      let even = getLongestPalindromFrom(string,i-1,i);
      let longest = odd[1] - odd[0] > even[1] - even[0]?odd:even;
      currentLongest = currentLongest[1] - currentLongest[0] >longest[1]-longest[0]?currentLongest:longest;
    }
    return string.slice(currentLongest[0],currentLongest[1]);
  }
  
  function getLongestPalindromFrom(string,leftIndex,rightIndex){
    while(leftIndex >= 0 && rightIndex < string.length){
      if(string[leftIndex] !== string[rightIndex]){
        break;
      } else {
        leftIndex--;
        rightIndex++;
      }
    }
    return [leftIndex+1,rightIndex];
  }
  
  console.log(longestPalindromicString("abaxyzzyxf"));