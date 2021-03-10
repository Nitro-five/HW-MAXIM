 function calc(initVal) {
   return {
      add: function (b){
         initVal+=b;
      },
      sub: function (b){
           initVal-=b;
      },
      div: function (b){
          initVal/=b;
      },
      mult: function (b){
          initVal*=b;
      },
      getResult:function(){
         return initVal;
      }
   };
};

const first = calc(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);
console.log(first.getResult());
