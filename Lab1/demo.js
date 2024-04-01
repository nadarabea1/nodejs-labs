const fs = require('fs');
var x=10
console.log(x)
setTimeout(()=>{console.log("Hiiiii")},3000)
console.log("x")

// fs.readFile('data.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// });
// console.log(data);


// fs.writeFile('data.txt', 'Hello World', (err)=>{});
// fs.appendFile('data.txt', ' Welcome', (err)=>{});

// fs.unlinkSync('data.txt', (err)=>{
//     if(err) console.log('file Not Found');
// });
for(let i=0; i<5000; i++){
    fs.appendFileSync('data.txt', `${i} Hello World\n`);
}
var reading= fs.createReadStream('data.txt',{encoding:'utf-8', highWaterMark: 16*1024});
reading.on('data', (data)=>{console.log(data.length)}) //2nd
// reading.on('error', ()=>{console.log('error')}) //if error
// reading.on('close', ()=>{console.log('File closed')}) //4th
// reading.on('end', ()=>{console.log('Ended')}) //3rd
// reading.on('open', ()=>{console.log('Opened')}) //1st

