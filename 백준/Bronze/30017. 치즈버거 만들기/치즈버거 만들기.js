const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if(b>=a) console.log(a*2-1);
else console.log(b*2+1); 