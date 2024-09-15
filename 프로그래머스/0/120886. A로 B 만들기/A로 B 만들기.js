function solution(before, after) {
    before.split('').map((a) => after = after.replace(a,''))
    if(after.length === 0) return 1;
    else return 0;
}