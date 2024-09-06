function solution(s, n) {
    var answer = '';
    let m = 0;
    let ss = ' ';
    [...s].map((a)=>{   //a-z : 97-122, A-Z : 65-90, ' ' : 32
        m = a.charCodeAt();
        if(m === 32){
            answer += ' ';   
        }else if(m >= 65 && m <= 90){
            m += n;
            if(m > 90) m -= 26;
            answer += String.fromCharCode(m);
        }else{
            m += n;
            if(m > 122) m -= 26;
            answer += String.fromCharCode(m);
        }
    })
    return answer;
}