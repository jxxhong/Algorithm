function getInt(denom1, denom2){
    let arr = [];
    for(let i = 0; i < (denom1 > denom2 ? denom1 : denom2); i++){
        if(denom1 % (i + 1) === 0 && denom2 % (i + 1) === 0)
            arr.push(i + 1);
    }
    return Math.max(...arr);
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let arr = [];
    let n = 0;
    
    n = getInt(denom1, denom2);
    
    let upper = numer1 * (denom2 / n) + numer2 * (denom1 / n);
    let lower = denom1 * denom2 / n;
    
    n = getInt(upper, lower);
    
    if(upper % n === 0 || lower % n === 0){
        upper = upper / n;
        lower = lower / n;
    }
    
    answer.push(upper, lower);
    
    return answer;
}