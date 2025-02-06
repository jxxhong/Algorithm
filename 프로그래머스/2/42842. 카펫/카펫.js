function solution(brown, yellow) {
    var answer = [];
    let k = yellow;
    let arr = [];
    
    if(yellow === 1) return [3, 3];
    
    for(let i = 1; i <= Math.sqrt(k); i++) {
        if(k % i === 0) {
            arr.push(i);
            arr.push(k / i);
        };
    }
    let set = new Set(arr);
    arr = [...set];
    
    for(let j = 0; j < arr.length; j++) {
        let l = k / arr[j];
        
        if((arr[j] * 2 + l * 2 + 4) === brown) {
            answer.push(l + 2);
            answer.push(arr[j] + 2);
            break;
        }
        
    }
    
    return answer;
}