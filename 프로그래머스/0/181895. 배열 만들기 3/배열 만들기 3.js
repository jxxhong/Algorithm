function solution(arr, intervals) {
    var answer = [];
    intervals.map(a => answer.push(arr.slice(a[0], a[1] + 1)))
    return answer.flat(1);
}