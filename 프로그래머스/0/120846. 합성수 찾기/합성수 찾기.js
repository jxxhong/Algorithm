function solution(n) {
    var answer = 0;
    let arr = [2,3];
    for(let i = 4; i < n + 1; i++){
        let s = false;
        arr.map((a)=> {if(i % a === 0) s = true;})
        if(s) answer++;
        arr.push(i);
    }
    
    return answer;
}