function solution(dirs) {
    let a = new Set();
    let x = 0;
    let y = 0;

    dirs.split('').map((m) => {
        switch(m){
            case 'U': if(y !== 5){
                a.add(`${x}${y}${x}${y + 1}`);
                a.add(`${x}${y + 1}${x}${y}`);
                y++;
            }
                break;
            case 'D': if(y !== -5){
                a.add(`${x}${y}${x}${y - 1}`);
                a.add(`${x}${y - 1}${x}${y}`);
                y--;
            }
                break;
 ;
            case 'R': if(x !== 5){
                a.add(`${x}${y}${x + 1}${y}`);
                a.add(`${x + 1}${y}${x}${y}`);
                x++;
            }
                break;
 ;
            case 'L': if(x !== -5){
                a.add(`${x}${y}${x - 1}${y}`);
                a.add(`${x - 1}${y}${x}${y}`);
                x--;
            }
                break;
 ;
        }
    })
    
    return a.size / 2;
}