function solution(my_string) {
    var answer = '';
    
    my_string.split('').map((a) =>{
        if(a === a.toUpperCase())
            answer += a.toLowerCase();
        if(a === a.toLowerCase())
            answer += a.toUpperCase();
    })
    return answer;
}