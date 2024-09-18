function solution(num_list) {
    let a = '';
    let b = '';
    
    num_list.map(n =>{
        if(n % 2 === 1) a += n.toString();
        else b += n.toString();
    })
    return parseInt(a) + parseInt(b);
}