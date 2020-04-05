//Implement a function that returns the longest subsequence common to given strings.

function longestCommonSubSequence(str1,str2){
    let lcs = [];
    for(let i=0;i<str1.length+1;i++){
      let row = new Array(str2.length+1).fill([]);
      lcs.push(row);
    }
    for(let i=1;i<str1.length+1;i++){
      for(let j=1;j<str2.length+1;j++){
        if(str1[i-1] === str2[j-1]){
          lcs[i][j] = lcs[i-1][j-1].concat(str1[i-1]);
        } else {
          lcs[i][j] = lcs[i-1][j].length > lcs[i][j-1].length ? lcs[i-1][j] : lcs[i][j-1]
        }
      }
    }
    return lcs[str1.length][str2.length];
  }
  
  console.log(longestCommonSubSequence("ZXVVYZW","XKYKZPW"));