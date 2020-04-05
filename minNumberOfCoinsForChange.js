//Find minimum number of coins to make change
//eg: $6 and [1,2,4]

function minNoOfCoinsForChange(number,denoms){
    //Create an array with length equivalent to the target amount +1.First index will have 0.,ie,min number of change needed for 0 dollars
    let noOfCoins = new Array(number + 1).fill(Infinity);
    noOfCoins[0] = [0];
    for(let denom of denoms){
      for(let amount = 0;amount < noOfCoins.length;amount++){
        if(denom <= amount){
          noOfCoins[amount] = Math.min(noOfCoins[amount],noOfCoins[amount-denom]+1);
        }
      }
    }
    return noOfCoins[number] !== Infinity ? noOfCoins[number] : -1;
  }
  
  console.log(minNoOfCoinsForChange(6,[1,2,4]));