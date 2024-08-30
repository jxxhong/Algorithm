function solution(s) {
    var answer = true;
    let ss = s.split('');
    
    if(!(ss.length === 4 || ss.length === 6 )) {
            return !answer;
    }else{
        for(let i = 0; i < ss.length; i++){
            if(!(parseInt(ss[i]) >= 0 && parseInt(ss[i]) <= 9)){
                answer = !answer;
                break;
            }
        }
        return answer;
    }
}