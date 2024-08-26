function solution(s) {
    var answer = '';
    
    let arr = s.split(' ');
    
    for(let i = 0; i < arr.length; i++){
        answer += arr[i].toUpperCase().charAt(0);
        for(let j = 1; j < arr[i].length; j++){
            answer += arr[i].charAt(j).toLowerCase();
        }
        if(i < arr.length - 1) answer += ' ';
    }
    return answer;
}