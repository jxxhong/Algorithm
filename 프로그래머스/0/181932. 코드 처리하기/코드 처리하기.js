function solution(code) {
    let mode = false;
    let ret = '';
    code.split('').map((a, i)=>{
        if(a === '1') mode = !mode;
        else if(mode === false && i % 2 === 0){
            ret += a
        }else if(mode && i % 2 === 1){
            ret += a;
        }
    })
    if(ret.length === 0) return 'EMPTY';
    else return ret;
}