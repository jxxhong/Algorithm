function solution(k, tangerine) {
    var answer = 0;
    let sum = 0;
    let sorted = new Array();
    tangerine.map((tan) => {
        if(sorted[tan]) sorted[tan] += 1;
        else sorted[tan] = 1;
    })
    
    sorted.sort((a, b) => b - a).slice(0, sorted.length - 1)
    
    while(answer < k) {
        sum += sorted[answer++];
        if(sum >= k) break;
    }
    
    return answer;
}