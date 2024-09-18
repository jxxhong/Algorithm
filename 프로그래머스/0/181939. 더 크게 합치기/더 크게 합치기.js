function solution(a, b) {
    let aa = a.toString();
    let bb = b.toString();
    return parseInt(aa + bb) > parseInt(bb + aa) ? parseInt(aa + bb) : parseInt(bb + aa);
}