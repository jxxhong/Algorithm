function solution(phone_number) {
    var answer = '';
    let n = phone_number.length;
    
    for(let i = 0; i < n - 4; i++){
        answer += '*';
    }
    answer += phone_number.slice(n-4, n);
    return answer;
}