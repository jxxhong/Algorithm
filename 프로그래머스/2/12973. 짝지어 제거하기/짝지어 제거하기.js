function solution(s)
{
    let answer = 0;
    let stack = [];
    
    s = s.split('')
    
    for(let i = 0; i < s.length; i++){
        if(stack.length > 0 && stack[stack.length - 1] === s[i])
            stack.pop();   
        else stack.push(s[i]);
    }
    
    if(stack.length === 0) return 1;
    else return 0;
}