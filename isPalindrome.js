//Palindrome
function isPalindrome(string){
    let reveresedString = '';
    for(let i=string.length - 1;i >=0;i++){
      reveresedString += string[i];
    }
    return reveresedString === string;
  }
  
  console.log("Malayalam is ", isPalindrome('malayalam'));
  console.log("Bharat is ", isPalindrome('bharat'));