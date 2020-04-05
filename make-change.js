//Given an array of positive integers respresenting coin denominations and a single no-negative integer respresenting a target amount of money.Write a function that return the number of ways to make change for that amount.
//Dynamic Programming example

function numberOfWaysToMakeChange(number,denominations){
    let ways = new Array(number + 1 ).fill(0);
    ways[0] = 1;
    for(let denom of denominations){
      for(let amount = 1;amount < number + 1;amount++){
        if(denom <= amount){
          ways[amount] += ways[amount-denom]
        }
      }
    }
    return ways[number];
  }
  
  console.log(numberOfWaysToMakeChange(6,[1,5]));