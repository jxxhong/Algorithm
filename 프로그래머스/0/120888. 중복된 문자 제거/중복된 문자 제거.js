function solution(my_string) {
    let arr = my_string.split('');
    let c = [];
    arr.map((a) =>{
        if(!c.includes(a)) c.push(a);
    })
    return c.join('')
}