/*

  Write a function that takes in a string made up of brackets ((,{,[,),],})) 
  and other optional characters. The function should return a
  boolean representing whether the string is balanced with regards to brackets.


  A string is said to be balanced if it has as many opening brackets of a
  certain type as it has closing brackets of that type and if no bracket is
  unmatched. Note that an opening bracket can't match a corresponding closing
  bracket that comes before it, and similarly, a closing bracket can't match a
  corresponding opening bracket that comes after it. Also, brackets can't
  overlap each other as in [(])
  
  Sample Input = ([])(){}(())()()
  Sample Output = true
*/

function bracketBalancer(array) {
    let openBrackets = "{([";
    let closeBrackets = "})]";
    let matchBrackets = {"}":"{","]":"[",")":"("};
    let stack = [];
    for(let elm of array){
        if(openBrackets.includes(elm)){
            stack.push(elm);
        } else if(closeBrackets.includes(elm)){
            if(stack.length === 0) {
                return false;
            }
            if(stack[stack.length - 1] === matchBrackets[elm]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(bracketBalancer("([])(){}(())()()"));