function solution(board, moves) {
    var answer = 0;
    let stack = [];
    
    moves.map((a) => {
        for(let i = 0; i < board.length; i++) {
            if(board[i][a - 1] !== 0) {
                if(stack[stack.length - 1] === board[i][a - 1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(board[i][a - 1]);
                
                board[i][a - 1] = 0;
                break;
            }
        }
    })
    
    return answer;
}