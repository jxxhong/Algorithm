function solution(n, m) {
    var answer = [];
    let a = [];
    let b = [];
    let c = [];
    for(let i = 0; i < (n > m ? n : m) + 1; i++){
        if(n >= i && n  % i === 0) a.push(i);
        if(m >= i && m  % i === 0) b.push(i);
    }
    c = a.filter((x)=>b.includes(x));
    let max = Math.max(...c);
    answer.push(max);
    answer.push(n * m / max);
    
    return answer;
}