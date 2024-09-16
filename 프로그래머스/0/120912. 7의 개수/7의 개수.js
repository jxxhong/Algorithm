function solution(array) {
    var answer = 0;
    array.map((a)=>{
        let s = a.toString().split('');
        s.map((n)=>{
            if(n === '7') answer++;
        })
    })
    return answer;
}