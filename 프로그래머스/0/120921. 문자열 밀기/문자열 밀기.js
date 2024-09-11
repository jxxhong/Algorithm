function solution(A, B) {
    let i = 1;
    let c = '';
    let arr = [];
    if(A===B) return 0;
    else{
        arr = A.split('');
        while(i < A.length){
            c = arr[A.length - 1];
            arr.pop();
            arr.unshift(c);
            if(arr.join('') === B) {
                return i;
                break;
            }i++;
        }
        if(i === A.length) return -1;
    }
}