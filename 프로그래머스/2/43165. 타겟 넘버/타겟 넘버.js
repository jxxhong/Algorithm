function solution(numbers, target) {
    var answer = 0;
    
    function dfs(index, result) {
        if(index === numbers.length) {
            if(result === target) {
                answer += 1;
                return;
            } else return;
        }
        
        dfs(index + 1, result + numbers[index])
        dfs(index + 1, result - numbers[index])
    }
    dfs(0, 0)
    
    return answer;
}