function solution(n, lost, reserve) {
    var answer = 0;

    let l = lost.slice();
    let r = reserve.slice();
    
    l = l.filter((a) => !(reserve.includes(a))).sort((a, b) => a - b)
    r = r.filter((a) => !(lost.includes(a))).sort((a, b) => a - b)
    
    let m = l.length;
    
    for(let i = 0; i < l.length; i++) {
        if(r.includes(l[i] - 1)) {
            r[r.indexOf(l[i] - 1)] = -1;
            m = m - 1;
        } else if(r.includes(l[i] + 1)) {
            r[r.indexOf(l[i] + 1)] = -1;
            m = m - 1;
        }
    }
    
    
    return n - m;
}