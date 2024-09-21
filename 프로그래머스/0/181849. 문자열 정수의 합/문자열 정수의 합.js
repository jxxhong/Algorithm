function solution(num_str) {
    let n = 0;
    num_str.split('').map(a => n += parseInt(a));
    return n;
}