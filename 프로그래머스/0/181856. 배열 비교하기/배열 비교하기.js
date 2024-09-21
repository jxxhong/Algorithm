function solution(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return arr1.length > arr2.length ? 1 : -1;
    else{
        let sum1 = 0;
        let sum2 = 0;
        arr1.map(a => sum1 += a);
        arr2.map(a => sum2 += a);
        
        if(sum1 === sum2) return 0;
        else return sum1 > sum2 ? 1 : -1;
    }
}