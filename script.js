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
        stringBoard = "Current Round:\n";
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
    function printBoard() {
        console.log(this.getBoard());
    }
    function placePiece(piece, x, y) {
        if(board[x][y] == " ") {
            board[x][y] = piece;
            return 1;
        }
        else {
            return 0;
        }
    }
    return {getBoard, printBoard, placePiece, getBoardArray};
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
        //check number of pieces
        let pieceCount = 0;
        for(row of currentBoard) {
            for(piece of row) {
                if(piece != " ") {
                pieceCount++;
            }
            }
        }
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
                winner = "Player1";
                return 1;
            }
            else if(o == 3) {
                console.log("Row win");
                winner = "Player2";
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
                winner = "Player1";
                return 1;
            }
            else if(o == 3) {
                winner = "Player2";
                return 1;
            }
            
        }
        //check diagonals
        //top left to bottom right
        if(currentBoard[0][0] == currentBoard[1][1] && currentBoard[0][0] == currentBoard[2][2]) {
            if(currentBoard[0][0] == "X") {
                winner = "Player1";
                return 1;
            }
            else {
                winner = "Player2";
                return 1;
            }
        }
        //top right to bottom left
        if(currentBoard[0][2] == currentBoard[1][1] && currentBoard[0][2] == currentBoard[2][0]) {
            if(currentBoard[0][2] == "X") {
                winner = "Player1";
                return 1;
            }
            else {
                winner = "Player2";
                return 1;
            }
        }
        //check for tie
        if(pieceCount == 9) {
                console.log("tie!");
                winner = "Tie";
                return 1;
            }
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
            }
        }
        else {
            if(player2.askToPlacePiece(x,y,gameBoard)) {
                nextTurn();
            }
        }
    }
    function getWinner() {
        return winner;
    }
    return { nextTurn, getRound, playTurn, checkForEndOfGame, getWinner };
}

const player1 = createPlayer("August", "X");
const player2 = createPlayer("Carl", "O");
const gameController = createGameLogic();
/*
console.log(player1.getName());
console.log(player2.getName());
player1.changeName("Bob");
console.log(player1.getName());
gameBoard.printBoard();
gameBoard.placePiece("x", 0,0);
gameBoard.printBoard();

console.log(player1.askToPlacePiece(1,1, gameBoard));

console.log(gameController.playersTurn);
gameController.nextTurn();
console.log(gameController.playersTurn);
gameController.nextTurn();
console.log(gameController.playersTurn);
gameController.nextTurn();
console.log(gameController.playersTurn);
console.log(gameController.getRound());
*/
gameBoard.printBoard();
gameController.playTurn(0,1)
gameBoard.printBoard();
gameController.playTurn(0,0)
gameBoard.printBoard();
gameController.playTurn(2,2)
gameBoard.printBoard();
gameController.playTurn(1,1)
gameBoard.printBoard();
gameController.playTurn(1,0)
gameBoard.printBoard();
gameController.playTurn(1,2)
gameBoard.printBoard();
gameController.playTurn(0,2)
gameBoard.printBoard();
gameController.playTurn(2,0)
gameBoard.printBoard();
gameController.playTurn(2,1)
gameBoard.printBoard();
console.log(gameController.getRound());
if(gameController.checkForEndOfGame()) {
    console.log(gameController.getWinner());
}
    
