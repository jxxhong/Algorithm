function solution(myString) {
    let n = 'l'.charCodeAt('l');
    let s = '';
    myString.split('').map((a) => {
        if(a.charCodeAt() < n)
            s += 'l';
        else s += a;
    })
    return s;
}