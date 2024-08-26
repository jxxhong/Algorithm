function solution(s) {
    var answer = '';
    const num = s.split(" ");
    
    let max = parseInt(num[0]);
    let min = parseInt(num[0]);
    
    for(let i = 0; i < num.length; i++){
        if(max<parseInt(num[i])) max = num[i];
        if(min>parseInt(num[i])) min = num[i];
    }
    answer = `${min} ${max}`
    
    return answer;
}