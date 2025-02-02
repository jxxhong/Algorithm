function solution(s) {
    var answer = 0;
    let check = []
    
    let a = s.split('')
    let tmp = s.split('').sort()
    
    if(
        tmp.filter((c)=> c === '(' ).length !== tmp.filter((c)=> c === ')' ).length ||
        tmp.filter((c)=> c === '{' ).length !== tmp.filter((c)=> c === '}' ).length ||
        tmp.filter((c)=> c === '[' ).length !== tmp.filter((c)=> c === ']' ).length 
    ) return 0;
    
    let n = s.length;
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++) {
            switch (a[j]) {
                case '(' :
                case '{' :
                case '[' : 
                    check.push(a[j]) 
                    break;
                case ')' : 
                    if(check[check.length - 1] === '(')
                        check.pop()
                    break;
                case '}' : 
                    if(check[check.length - 1] === '{')
                        check.pop()
                    break;
                case ']' : 
                    if(check[check.length - 1] === '[')
                        check.pop()
                    break;
            }
        }

        if(check.length === 0) answer++
        check = []
        a = [...a.slice(1, n), a[0]]
    }
    
    return answer;
}