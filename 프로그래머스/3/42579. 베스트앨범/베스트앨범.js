function solution(genres, plays) {
    var answer = [];
    let genreList = {};
    let playList = {};
    let arr = [];
    let genreArr = [];
    
    genres.map((genre, i) => {
        if(!(genre in genreList)) {
            genreList[genre] = [];
            playList[genre] = 0;
        }
        genreList[genre].push([i, plays[i]]);
        playList[genre] += plays[i];
    })
    
    arr = Object.keys(playList).sort((a, b) => {
        return playList[b] - playList[a];
    })
    
    arr.map((gen) => {
        genreArr = genreList[gen].sort((a, b) => {
            return b[1] - a[1]
        })
        answer.push(...genreArr.slice(0, 2).map((a) => a[0]))
    })
    
    return answer;
}