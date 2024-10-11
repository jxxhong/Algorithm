function solution(myString, pat) {
    let s = pat.split('').map(a => {
        if(a ==='A') return 'B'
        else return 'A';
    }).join('');
    
    return myString.includes(s) ? 1 : 0;
}