function solution(arr, queries) {
    queries.map(a=>{
        [arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]]
    })
    return arr;
}