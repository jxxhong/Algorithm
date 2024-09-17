const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str.split('').map((a) => {
        if(a === a.toUpperCase()) answer += a.toLowerCase();
        else answer += a.toUpperCase();
    })
    console.log(answer)
});