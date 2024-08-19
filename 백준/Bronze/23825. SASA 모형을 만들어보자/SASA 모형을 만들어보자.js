const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(parseInt(a/2)>parseInt(b/2)?parseInt(b/2):parseInt(a/2));