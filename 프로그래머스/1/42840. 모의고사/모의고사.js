function solution(answers) {
    var answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2 ,5];
    let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === a1[i % 5])
            count[0] += 1;
        if(answers[i] === a2[i % 8])
            count[1] += 1;
        if(answers[i] === a3[i % 10])
            count[2] += 1;
    }   
    let n = Math.max(...count);
    
    for(let j = 0; j < 3; j++){
        if(n === count[j])
            answer.push(j + 1);
    }
    
    
    return answer;
}