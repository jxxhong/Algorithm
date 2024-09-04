function solution(s) {
    var answer = '';
    
    let arr = s.split('');
    
    arr.sort((a, b) => {
        if(a.charCodeAt() < b.charCodeAt())
            return 1;
        else if(a.charCodeAt() > b.charCodeAt())
            return -1;
        else return 0;
    })
    
    answer = arr.join('');
    
    return answer;
}