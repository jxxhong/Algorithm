function solution(num_list) {
    let n1 = 0;
    let n2 = 0;
    
    num_list.map((a, i)=> {
        if(i % 2 === 0)
            n1 += a;
        else n2 += a;
    });
    
    return n1 > n2 ? n1 : n2;
}