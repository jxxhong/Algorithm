function solution(arr, queries) {
    var answer = [];
    queries.map(a => {
        let newarr = arr.slice(a[0], a[1] + 1).filter(b=> b > a[2]);
        if(newarr.length === 0) answer.push(-1);
        else answer.push(Math.min(...newarr))
    })
    return answer;
}