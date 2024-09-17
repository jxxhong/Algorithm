function solution(array) {
    var answer = 0;
    let m = {}
    array.map((a)=>{
        if(m[a] === undefined) m[a] = 1;
        else m[a] += 1;
    })
    
    let arr = Object.keys(m);
    let max = 0;
    arr.map((a) => {
        if(m[parseInt(a)] > max) {
            answer = parseInt(a);
            max = m[parseInt(a)];
        }
        else if(m[parseInt(a)] === max)
            answer = -1;
    })
    
    return answer;
}