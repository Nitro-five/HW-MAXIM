const template = `Hello, {{name}}, are u {{age}} old ?`;

const a = {
   name: 'Max',
   age: 22
}

const b = {
   name: 'Stefano'
};

//function makeTextFromTempLate(template) -> function(obj) -> 'Hello, Max';
function makeTextFromTempLate(tmp){
  return obj=>{                     //1. e='name','tmp' = `Hello, {{name}}, are u {{age}} old ?`
     Object.keys(obj).forEach(e=>{ //1.1 result = `Hello, {{name}}, are u {{age}} old ?`
        result=tmp.replace(`{{${e}}}`, obj[e]) //2. e ='age', tmp = 'Hello, {{name}}, are u {{age}} old ?'
     });
     return result;
   };
};

const makeTmp=makeTextFromTempLate(template);

console.log(makeTmp(a));

console.log(makeTmp(b));
