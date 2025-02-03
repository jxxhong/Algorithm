function solution(cards1, cards2, goal) {
    let word = goal.shift();
    let w1 = cards1.shift();
    let w2 = cards2.shift();
    
    while(goal.length > 0) {
        if(word === w1)
            w1 = cards1.shift();
        else if(word === w2) 
            w2 = cards2.shift();
        word = goal.shift();
        if(word !== w1 && word !== w2) return 'No'
    }
    
    return 'Yes';
}