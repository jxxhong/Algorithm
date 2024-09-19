function solution(num_list) {
    let n = num_list[num_list.length - 1];
    let m = num_list[num_list.length - 2];
    if(n > m) num_list.push(n - m);
    else num_list.push(2 * n); 
        
    return num_list;
}