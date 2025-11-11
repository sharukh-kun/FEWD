const arithmetic = require('./arithmatic');
const fs = require('fs');
const a = 10;
const b = 10;
const sum = arithmetic.add(a,b);
const difference = arithmetic.sub(a,b);
const product = arithmetic.mult(a,b);
const quotient  = arithmetic.div(a,b);

console.log(`Sum:${sum}`);
console.log(`DIfference:${difference}`);
console.log(`product:${product}`);
console.log(`quotient:${quotient}`);

const results = `Sum :${sum}
Difference:${difference}
Product:${product}
Qoutient:${quotient}`;

fs.writeFile('results.txt',results,(err)=>{
    if(err){
        console.error('Error writing to file',err);    
    }else{
        console.log('Result written to results.txt');
        }
});

fs.readFile('results.txt','utf-8',(err,data)=>{
    if(err){
        console.error('Erro reading from file',err);
    }else{
        console.log('content of results.txt:');
        console.log(data);
    }
});