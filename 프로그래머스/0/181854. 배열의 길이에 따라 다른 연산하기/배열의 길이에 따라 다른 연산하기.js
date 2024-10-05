function solution(arr, n) {
    return arr.map((a, i) => {
        if(arr.length % 2 === 0) {
            if(i % 2 === 1) return a + n;
            else return a;
        }else {
            if(i % 2 === 0) return a + n;
            else return a;
        }
    });
}