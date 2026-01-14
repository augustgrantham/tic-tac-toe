//squares retrieval
const squares = document.querySelectorAll("div.box");
//restart button retrieval
const resetButton = document.querySelector("#restart");
//object factories
const gameBoard = (function () {
    //attributes
    let board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]; 
    let piecesPlaced = 0;

    //methods

    function getBoard() {
        //console version
        stringBoard = "";
        for(let row = 0; row <=2; row++)
        {
            for(let col = 0; col <=2; col++)
            {
                stringBoard += "[" + board[row][col] + "]";
            }
            stringBoard += "\n";
        }
        return stringBoard;
    };
    function getBoardArray() {
        return board;
    }
    function getPiecesPlaced() {
        return piecesPlaced;
    }
    function printBoard() {
        console.log(gameBoard.getBoard());
    }
    function placePiece(piece, x, y) {
        if(board[x][y] == " ") {
            board[x][y] = piece;
            piecesPlaced++;
            return 1;
        }
        else {
            return 0;
        }
    }
    function resetBoard() {
        board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]; 
        piecesPlaced = 0;
    }
    return {getBoard, printBoard, placePiece, getBoardArray, getPiecesPlaced, resetBoard};
})();

function createPlayer (playerName, playersPieceType) {
    //attributes
    let name = playerName;
    let pieceType = playersPieceType;

    //methods 

    function getName() {
        return name;
    }
    function changeName(newName) {
        name = newName;
    }

    function askToPlacePiece(x,y,board) {
        let success = board.placePiece(pieceType,x,y);
        return success;
    }
    return {getName, changeName, askToPlacePiece };
}

function createGameLogic() {
    //attributes
    let playersTurn = 1;
    let winner = null;
    let roundsCount = 1;

    //methods 

    function checkForEndOfGame() {
        const currentBoard = gameBoard.getBoardArray();
        //check rows
        for(let rows = 0; rows < 3; rows++) {
            let x = 0;
            let o = 0;
            for(let cols = 0; cols < 3; cols++) {
                if(currentBoard[rows][cols] == "X") {
                    x++;
                }
                else if(currentBoard[rows][cols] == "O"){
                    o++;
                }
            }
            if(x == 3) {
                console.log("Row win");
                winner = player1.getName();
                return 1;
            }
            else if(o == 3) {
                console.log("Row win");
                winner = player2.getName();
                return 1;
            }
        }
        //check columns
        for(let cols = 0; cols < 3; cols++) {
            let x = 0;
            let o = 0;
            for(let rows = 0; rows < 3; rows++) {
                if(currentBoard[rows][cols] == "X") {
                    x++;
                }
                else if(currentBoard[rows][cols] == "O"){
                    o++;
                }
            }
            if(x == 3) {
                winner = player1.getName();
                return 1;
            }
            else if(o == 3) {
                winner = player2.getName();
                return 1;
            }
            
        }
        //check diagonals
        //top left to bottom right
        if(currentBoard[0][0] != " " && currentBoard[0][0] == currentBoard[1][1] && currentBoard[0][0] == currentBoard[2][2]) {
            if(currentBoard[0][0] == "X") {
                winner = player1.getName();
                return 1;
            }
            else {
                winner = player2.getName();
                console.log("horizontal win");
                return 1;
            }
        }
        //top right to bottom left
        if(currentBoard[0][2] == currentBoard[1][1] && currentBoard[0][2] == currentBoard[2][0]) {
            if(currentBoard[0][2] == "X") {
                winner = player1.getName();
                return 1;
            }
            else if(currentBoard[0][2] == "O"){
                winner = player2.getName();
                return 1;
            }
        }
        //check for tie
        if(gameBoard.getPiecesPlaced() == 9) {
                console.log("tie!");
                winner = "Tie";
                return 1;
            }
        return 0;
    }
    function nextTurn() {
        if(playersTurn == 1) {
            playersTurn = 2;
        }
        else {
            playersTurn = 1;
        }
        roundsCount++;
    }

    function getRound() {

        return roundsCount;
    }

    function playTurn(x,y) {
        if (playersTurn == 1) {
            if(player1.askToPlacePiece(x,y,gameBoard)) {
                nextTurn();
                return 1;
            }
        }
        else {
            if(player2.askToPlacePiece(x,y,gameBoard)) {
                nextTurn();
                return 1;
            }
        }
        
        return 0;
    }
    function getWinner() {
        return winner;
    }
    function getCurrentPlayer() {
        return playersTurn;
    }
    function resetGame() {
        output.textContent = "";
        playersTurn = 1;
        winner = null;
        roundsCount = 1;
        gameBoard.resetBoard();
        squares.forEach((square) => {
            square.textContent = " ";
        }) 
    }
    return { nextTurn, getRound, playTurn, checkForEndOfGame, getWinner, getCurrentPlayer, resetGame };
}

const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player 2", "O");
const gameController = createGameLogic();

//html element query
// debug / results window
const output = document.querySelector(".feed");
// name retrievals
const firstPlayerName = document.querySelector(".player1");
const secondPlayerName = document.querySelector(".player2");

//name changing events
firstPlayerName.addEventListener("input", (event) => { 
    if (firstPlayerName == "") {
        firstPlayerName = "Player 1";
    }
    player1.changeName(firstPlayerName.value);
});
secondPlayerName.addEventListener("input", (event) => { 
    if (secondPlayerName == "") {
        secondPlayerName = "Player 2";
    }
    player2.changeName(secondPlayerName.value);
});


//coordinate seletion and event listening
squares.forEach((square) => {
    let x = Number(square.classList[1]);
    let y = Number(square.classList[2]);
    //correct y if there isn't one placed due to classList grabbing both values for x if its the same number
    if(isNaN(y)) {
        y = x;
    }
    square.addEventListener("click", () => {
        if(runGame(x,y)) {
            if(gameController.getCurrentPlayer() == 1) {
                square.innerHTML = "o";
            }
            else {
                square.textContent = "x";
            }

            if(gameController.checkForEndOfGame()) {
                runGame();
            }
        }
    });
});

//game loop
function runGame(x,y) {
    if(gameController.getWinner() == null) {
        return gameController.playTurn(x,y);
    }
    else {
        resetButton.style.display = "inline";
        if(gameController.getWinner() == "Tie") {
            output.textContent += `\n It's a tie!`;
        }
        else {
            output.textContent += "The winner is " + gameController.getWinner() + "!";
        }
    }
}

//reset game event listener

resetButton.addEventListener("click", () => {
    gameController.resetGame();
    resetButton.style.display = "none";
})