const fs = require('fs');
const http= require('http');

http.createServer((req, res)=>{
    
    if(req.url!=='/favicon.ico'){
        console.log(req.url);
        var urlSplit= req.url.split('/')
        var result = calculate(urlSplit[1], ...urlSplit.slice(2).map(Number));

        fs.appendFile('calc.txt', `${urlSplit[1]} : ${result}\n`, (err)=>{});
        res.write(`<p>Result is: ${result}</p>`)
    }
    res.end();
}).listen(7000)

function calculate(op, a,b, ...rest){
    switch(op){
        case 'add':
            return a+b+rest.reduce((acc, val)=> val+acc, 0)
        case 'sub':
            return a-b-rest.reduce((acc, val)=> val-acc, 0)
        case 'mul':
            return a*b*rest.reduce((acc, val)=> val*acc, 1)
        case 'div':
            return a/b/rest.reduce((acc, val)=>val/acc, 1) 
        default:
            return 'Invalid operation'
    }
}
