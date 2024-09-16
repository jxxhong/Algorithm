function solution(n) {
    let i = 0;
    let num = 1;
    while(num <= n){
        num = num * ++i;
    }
    return i - 1;
}