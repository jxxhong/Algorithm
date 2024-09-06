function solution(s){
    var answer = true;

    let a = 0;
    let b = 0;
    let c = 0;
    
    for(i = 0; i <s.length; i++){
        if(s.charAt(i) === '(') a = a + 1;
        else if(s.charAt(i) === ')') b = b + 1;
        
        if(a < b){
            answer = !answer;
            break;
        }
        c++;
    }
    
    if(a!==b&&c===s.length) answer = !answer;

    return answer;
}