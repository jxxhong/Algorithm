function solution(priorities, location) {
    var answer = 0;
    let queue = priorities;
    let locate = location;
    let max = 0;
    let n = 0;
    
    while(true) {
        max = Math.max(...queue)
        n = queue.shift();
        locate--;
        
        if(n === max) {
            answer++;
            if(locate === -1) break;
        } else {
            queue.push(n);
            if(locate === -1) locate = queue.length - 1
        }
    }
    
    return answer;
}