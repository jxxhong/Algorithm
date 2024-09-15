function solution(board) {
    var answer = 0;
    let arr = [
        [-1,-1], [0, -1], [1, -1],
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1]
    ]
    let n = board.length;
    let newarr = new Array(n).fill(0).map(() => Array(n).fill(0));
    
    board.map((a,i) => a.map((b,j) => {
        if(b === 1){
            arr.map((c) => {
                if(i + c[0] >= 0 && j + c[1] >=0 
                   && i + c[0] < n && j + c[1] < n)
                    newarr[i + c[0]][j + c[1]] = -1;
            })
        }
    }))
    
    newarr.map((k) => k.map((l) => {
        if(l === 0) answer++;
    }))
    
    return answer;
}