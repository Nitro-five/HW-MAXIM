function calcFactorial(n) {
   let result = BigInt(1);

   for ( i = BigInt(2); i <=n; i++) {
      result *=i;
   }
   return result;
}
console.log(calcFactorial(42n));