function solution(my_string) {
    var answer = 0;
    let before = '+';
    let arr = my_string.split(' ').map((a)=>{
        if(a === '-' || a === '+')
            before = a;
        else{
            if(before === '+'){
                answer += parseInt(a);
                before = '';
            }else{
                answer -= parseInt(a);
                before = '';
            }
        }
    })
    return answer;
}