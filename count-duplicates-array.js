//Write a program to count the number of duplicates in an array

var countDup = function(array){
    let breadCrumbs = {};
    for(let i=0;i<array.length;i++){
        if(breadCrumbs[array[i]]){
            breadCrumbs[array[i]] +=1;
        }else{
          breadCrumbs[array[i]] = 1;
        }
    }
    return breadCrumbs;
}

console.log(countDup(["h","e","l","l","o"]));
console.log(countDup([1,1,3,2,4,5,6,6,5]))