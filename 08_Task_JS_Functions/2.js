function startGame(n, step) {

    let portionCnt = 0;
    let playerInPortionCnt = 0;
    const players = Array.from({length: n}, (_, i) => i + 1)
    while (players.length != 1) {
        while (playerInPortionCnt < players.length) {
            if (portionCnt != step - 1) {
                playerInPortionCnt++
                portionCnt++
            } else {
                players.splice(playerInPortionCnt, 1);
                portionCnt = 0;
                if (players.length == 1) {
                    break
                }
            }
        }
        playerInPortionCnt = 0;
    }
    return players[0];
}


console.log(startGame(7, 3));
console.log(startGame(11, 19));
console.log(startGame(1, 300));
console.log(startGame(14, 2));
console.log(startGame(100, 1));