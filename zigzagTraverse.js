//Traverse a 2-D array/matrix in a zi zag manner


function zigzag(array){
    let height = array.length - 1;
    let width = array[0].length - 1;
    let result = [];
    let row = 0;
    let col = 0;
    let goDown = true;
    while(!isOutofBounds(row,col,width,height)){
      result.push(array[row][col]);
      if(goDown){
        if(col ===0 || row === height){
          goDown = false;
          if(row === height){
            col++;
          } else {
            row++;
          }
        } else {
          row++;
          col--;
        }
      } else {
        if(row ===0 || col === width){
          goDown = true;
          if(col === width){
            row++;
          } else {
            col++;
          }
        } else {
          col++;
          row--;
        }
      }
    }
    return result;
  }
  
  function isOutofBounds(row,col,width,height){
    return row < 0 || row > height || col <0 ||col > width;
  }
  
  const array = [
    [1,3,4,10],
    [2,5,9,11],
    [6,8,12,15],
    [7,13,14,16]
  ]
  
  console.log(zigzag(array));