function solution(binomial) {
    let [a, b, c] = binomial.split(' ');
    switch(b){
        case '+': return parseInt(a) + parseInt(c); 
        case '-': return a - c;
        case '*': return a * c;
    }
}