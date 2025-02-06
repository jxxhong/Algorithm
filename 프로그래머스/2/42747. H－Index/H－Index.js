function solution(citations) {
    citations.sort((a, b) => a - b);
    let max = 0;
    
    for(let i = 0; i < citations[citations.length - 1]; i++) {
        let m = citations.filter((k) => k >= i).length;
        if(m >= i) max = i;
        else break;
    }
    
    return max;
}