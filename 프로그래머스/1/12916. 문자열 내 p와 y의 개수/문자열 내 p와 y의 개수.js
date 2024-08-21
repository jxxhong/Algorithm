function solution(s){
    var answer = true;

    let p = 0;
    let y = 0;
    const st = s.split("");
    
    for(let i=0;i<s.length;i++){
        if(st[i]==="p"||st[i]==="P") p++;
        else if(st[i]==="y"||st[i]==="Y") y++;
    }
    if(p!==y) answer = !answer;
    
    return answer;
}