function solution(arr) {
    let x = [];
    return arr.map(n => x = x.concat(Array(n).fill(n)))[arr.length - 1]
}