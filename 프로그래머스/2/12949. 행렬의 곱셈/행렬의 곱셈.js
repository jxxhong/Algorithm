function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        answer.push(Array(arr2[0].length).fill(0));
    }
    
    answer.map((a, i)=>{
        a.map((b, j)=>{
            for(let c = 0; c < arr2.length; c++) {
                answer[i][j] += arr1[i][c] * arr2[c][j];
            }
        })
    })
    
    return answer;
}