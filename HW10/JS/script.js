 function calc(initVal) {
   return {
      add: function(b){
         return initVal+b;
      },
      sub: function(b){
         return  initVal-b;
      },
      div: function(b){
         return initVal/b;
      },
      mult: function(b){
         return initVal*b;
      }
   };
}

const first = calc(4);

console.log(first);
console.log(first.add(33));
console.log(first.sub(12));
console.log(first.div(2));
console.log(first.mult(4));
