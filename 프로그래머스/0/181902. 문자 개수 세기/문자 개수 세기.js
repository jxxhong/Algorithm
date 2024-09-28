function solution(my_string) {
    var answer = Array(52).fill(0);
    let upper = 'A'.charCodeAt();
    let lower = 'a'.charCodeAt();
    
    my_string.split('').map(a => {
        let n = a.charCodeAt();
        if(n >= 65 && n <= 90) {
            answer[n - upper] += 1;
        } else if(n >= 95 && n <= 122) {
            answer[n - lower + 26] += 1;
        }
    })
    
    return answer;
}