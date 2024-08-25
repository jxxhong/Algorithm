function solution(n) {
    var answer = 0;
    
    let s = n.toString().split("");
    s.sort((a,b)=>b - a)
    
    let ss = '';
    for(let i = 0; i < s.length; i++){
        ss += s[i];
    }
    answer = parseInt(ss);
    
    return answer;
}