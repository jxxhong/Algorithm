function solution(N, stages) {
    var answer = [];
    let arr = [];
    let n = 0;
    
    for(let i = 1; i <= N; i++) {
        n = stages.filter((a) => a >= i).length    
        if((stages.filter((a) => a === i)).length !== 0)
            arr.push(parseFloat(stages.filter((a) => a === i).length / n))
        else arr.push(0)
    }
    
    for(let j = 0; j < arr.length; j++) {
        let max = Math.max(...arr)
        answer.push(arr.indexOf(max) + 1)
        arr[arr.indexOf(max)] = -1
    }
    
    return answer;
}