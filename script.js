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
    return {getBoard, printBoard, placePiece};
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

    return { nextTurn, getRound, playTurn };
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
gameController.playTurn(1,2)
gameBoard.printBoard();
gameController.playTurn(0,1)
gameBoard.printBoard();
gameController.playTurn(2,2)
gameBoard.printBoard();
gameController.playTurn(0,2)
gameBoard.printBoard();
gameController.playTurn(1,1)
gameBoard.printBoard();
gameController.playTurn(0,0)
gameBoard.printBoard();