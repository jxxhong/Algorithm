function solution(i, j, k) {
    var answer = 0;
    for(i; i < j + 1; i++){
        let s = i.toString().split('');
        s.map((a)=> {
            if(a === k.toString())
                answer++;
        })
    }
    return answer;
}