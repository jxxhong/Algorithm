function solution(myStr) {
    var answer = myStr.split('a').map(a => {
        return a.split('b').map(b => {
            return b.split('c')
        })
    }).flat(Infinity).filter(f => f);
    
    return answer.length === 0 ? ['EMPTY'] : answer;
}