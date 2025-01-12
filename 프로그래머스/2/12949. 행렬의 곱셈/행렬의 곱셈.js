function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        answer.push(Array(arr2[0].length).fill(0))
    }
    
    for(let j = 0; j < arr1.length; j++) {    
        for(let k = 0; k < arr2[0].length; k++) {
            answer[j][k] += arr1[j][k] + arr2[j][k]
        }
    }
    return answer;
}