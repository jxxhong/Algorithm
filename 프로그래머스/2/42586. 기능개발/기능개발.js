function solution(progresses, speeds) {
    var answer = [];
    if(progresses.length === 1) return [1];
    
    let left = progresses.map((a, i) => Math.ceil((100 - a) / speeds[i]))
    let m = left.shift();
    let count = 1;

    while(left.length > 0) {
        let k = left.shift();
        if(m >= k)
            count++;
        else {
            m = k;
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count);
    
    return answer;
}