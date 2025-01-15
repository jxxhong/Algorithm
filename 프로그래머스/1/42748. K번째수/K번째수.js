function solution(array, commands) {
    var answer = [];
    commands.map((a) => {
        answer.push(array.slice(a[0] - 1, a[1]).sort(((a, b) => a - b))[a[2] - 1]);
        
    })
    return answer;
}