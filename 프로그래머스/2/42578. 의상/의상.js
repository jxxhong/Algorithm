function solution(clothes) {
    var answer = 1;
    let hash = {}
    
    clothes.map((a) => {
        if(!(hash[a[1]])) hash[a[1]] = [a[0]]
        else hash[a[1]].push(a[0])
    })
    
    for(const key in hash) {
        answer *= hash[key].length + 1;
    }
    
    return answer - 1;
}