function solution(n) {
    var answer = [[]];
    
    let mini = 0, i = 0;
    let minj = 0, j = 0;
    let maxi = n;
    let maxj = n;
    let num = 1;
    let k = 0;
    
    answer = new Array(n).fill(0);
    for(k = 0; k < n; k++){
        answer[k] = new Array(n).fill(0);
    }
    
    while(mini <= maxi && minj <=maxj){
        for(k = minj; k < maxj; k++){
            answer[mini][k] = num++;
        }
        mini++;
        
        for(k = mini; k < maxi; k++){
            answer[k][maxj - 1] = num++;
        }
        maxj--;
        
        for(k = maxj - 1; k >= minj; k--){
            answer[maxi - 1][k] = num++;
        }
        maxi--;
        
        for(k = maxi - 1; k >= mini; k--){
            answer[k][minj] = num++;
        }
        minj++;
    }
    
    return answer;
}