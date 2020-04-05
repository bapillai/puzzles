//Implement Sum(3)(4)(5)=12 with javascript

function sum(arg0){
    function innerOne(arg1){
      function innerTwo(arg2){
        return arg0+arg1+arg2;
      }
      return innerTwo;
    }
    return innerOne;
   }
   
   //Scalable Way:
   let multiArgSum = function(a){
     return function(b){
       if(b){
         return multiArgSum(a+b);
       }else{
         return a;
       }
     }
   }
   console.log(sum(3)(4)(5));
   console.log(multiArgSum(0)(1)(2)(3)(4)())