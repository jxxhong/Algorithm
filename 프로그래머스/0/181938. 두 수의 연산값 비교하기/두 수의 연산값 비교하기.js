function solution(a, b) {
    let aa = a.toString();
    let bb = b.toString();
    let c = parseInt(aa + bb);
    
    if(c === 2 * a * b) return c;
    else return c > 2 * a * b ? c : 2 * a * b;
}