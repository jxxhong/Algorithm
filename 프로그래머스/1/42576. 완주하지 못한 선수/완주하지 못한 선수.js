function solution(participant, completion) {
    let list = {}
    
    participant.map((name) => {
        if(list[name]) list[name] += 1;
        else list[name] = 1;
    })
    
    completion.map((n) => {
        list[n] -= 1;
    })
    
    for(const key in list) {
        if(list[key] === 1) return key;
    }
}