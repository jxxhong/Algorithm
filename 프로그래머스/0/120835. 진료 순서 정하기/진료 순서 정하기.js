function solution(emergency) {
    var answer = [];
    let i = 1;
    while(i < emergency.length + 1){
        let n = emergency.indexOf(Math.max(...emergency));
        answer[n] = i++;
        emergency[n] = 0;
    }
    return answer;
}