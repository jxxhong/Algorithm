function solution(my_string) {
    var answer = [];
    my_string.split('').map((a) =>{
        if(Number.isInteger(parseInt(a)))
            answer.push(parseInt(a));
    })
    return answer.sort((a, b) => a - b);
}