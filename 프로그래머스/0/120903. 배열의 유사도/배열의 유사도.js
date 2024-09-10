function solution(s1, s2) {
    let answer = 0;
    s1.map((a)=>{
        if(s2.includes(a)) answer++;
    })
    return answer;
}