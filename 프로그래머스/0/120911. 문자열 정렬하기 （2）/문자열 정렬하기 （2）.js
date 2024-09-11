function solution(my_string) {
    let answer = '';
    my_string.split('').map((a)=>{
        if(a === a.toUpperCase()) answer += a.toLowerCase();
        else answer += a;
    })
    return answer.split('').sort().join('');
}