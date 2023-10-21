// Using callbacks
const fs = require('node:fs');
fs.readFile('./f1.txt','utf-8', (err, t1) =>{
    console.log(t1)
});
// console.log(t1);
console.log('In the meantime');
// const t2 = fs.readFile('./f2.txt','utf-8');
fs.readFile('./f2.txt','utf-8', (err, t2) =>{
    console.log(t2)
});
//console.log(t2);
console.log('Final part');

// using async-await
const fs = require('node:fs/promises');
const readFiles = async () => {
    const t1 = await fs.readFile('./f1.txt','utf-8');
    console.log(t1);
    const t2 = await fs.readFile('./f2.txt','utf-8');
    console.log(t2);
}
readFiles();