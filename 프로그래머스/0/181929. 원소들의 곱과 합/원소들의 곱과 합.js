function solution(num_list) {
    let n = 0;
    let m = 1;
    
    num_list.map(a=>{
        n += a;
        m *= a;
    })
    return n ** 2 > m ? 1 : 0;
}