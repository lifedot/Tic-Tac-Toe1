let cells = document.querySelectorAll(".row > div");
let player = "X";
let moves = 0;
let gameOver = false;
let endGameText = document.getElementById("endGameText")
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked, {once: true});
};

function cellClicked (e) {
    moves++;
    e.target.textContent = player;
    winCheck()
    togglePlayer();

    if (moves === 9 && gameOver === false){
        tieGame();
    }
};

function togglePlayer() {
    if (player === "X") {
        player = "O"
    } else {
        player = "X"
    }
};

let wins = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];

/*function winCheck() {
    if (cells[0].textContent === player) {
        if (cells[1].textContent === player && cells[2].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
    } 
    if (cells[3].textContent === player) {
        if (cells[4].textContent === player && cells[5].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
    }
    if (cells[6].textContent === player) {
        if (cells[7].textContent === player && cells[8].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
    }
    if (cells[0].textContent === player) {
        if (cells[3].textContent === player && cells[6].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
    }
    if (cells[1].textContent === player) {
        if (cells[4].textContent === player && cells[7].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
    }
    if (cells[2].textContent === player) {
        if (cells[5].textContent === player && cells[8].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
    }
    if (cells[0].textContent === player) {
        if (cells[4].textContent === player && cells[8].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
    }
    if (cells[2].textContent === player) {
        if (cells[4].textContent === player && cells[6].textContent === player) {
            gameOver = true
            console.log(player + " Wins!")
        }
        if (winCtr === 3) {
            gameOver = true
            endGameText.innerHTML = "${player} wins!" <br> <button onClick={location.reload()}>Restart</button>;
        }
    }
}

function tieGame() {
    endGameText.innerHTML = "It's a Draw!" <br> <button onClick={location.reload()}>Restart</button>;

}*/


function winCheck() {
    for (let i = 0; i < wins.length; i++){
        let oneWinCombo = wins[i]
            let winCtr = 0
        for (let j = 0; j < oneWinCombo.length; j++) {
            if (oneWinCombo[j].textContent === player) {
                winCtr++
            }
            if (winCtr === 3){
                endGameText.innerHTML = player + " wins! <br> <button onClick={location.reload()}>Restart</button>"
                console.log("Game Over!")
            }
        }
    }
}
function tieGame() {
    endGameText.innerHTML = "It's a tie <br> <button onClick={location.reload()}>Restart</button>"
}
// cells[0].textContent =
// if else statements
// comparison operators ===
// if(conditionOne && conditionTwo) {}
// event.target.textContent = "X";