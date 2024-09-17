function solution(array, n) {
    let newarr = [];
    array.sort((a, b)=> a - b).map((a) => newarr.push(Math.abs(n - a)))
    return array[newarr.indexOf(Math.min(...newarr))]
}