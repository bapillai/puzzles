//Write a function that takes in a string and then returns a substring without duplicate characters.eg:Sample Input-"clementisacap"
//Sample Output - "mentisac",
//Time Complexity =>O(n)
//Space

function longestSubstringWithoutDuplicates(string){
    let lastSeen = {};
    let longest = [0,1];
    let startIndex = 0;
    for(let i=0;i<string.length;i++){
      let char = string[i];
      if(char in lastSeen){
        startIndex = Math.max(startIndex, lastSeen[char]+1);
      }
      //Current Substring ends at i hence we increment it and startIndex is equivalent to longest[i];
     if(longest[1]-longest[0] < i+1-startIndex){
       longest = [startIndex,i+1];
     }
     lastSeen[char] = i;
    }
    return string.slice(longest[0],longest[1]);
  }
  
  console.log(longestSubstringWithoutDuplicates("clementisacap"));