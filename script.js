//object factories
function createGameBoard () {
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
        console.log(demoBoard.getBoard());
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
}

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
        let test = 3;
    }

    function nextTurn() {
        if(this.playersTurn == 1) {
            this.playersTurn = 2;
        }
        else {
            this.playersTurn = 1;
        }
        roundsCount++;
    }

    function getRound() {

        return roundsCount;
    }

    return {playersTurn, nextTurn, getRound };
}
const demoBoard = createGameBoard();
const player1 = createPlayer("August", "X");
const player2 = createPlayer("Carl", "X");
const gameController = createGameLogic();
/*
console.log(player1.getName());
console.log(player2.getName());
player1.changeName("Bob");
console.log(player1.getName());
demoBoard.printBoard();
demoBoard.placePiece("x", 0,0);
demoBoard.printBoard();

console.log(player1.askToPlacePiece(1,1, demoBoard));
*/
console.log(gameController.playersTurn);
gameController.nextTurn();
console.log(gameController.playersTurn);
gameController.nextTurn();
console.log(gameController.playersTurn);
gameController.nextTurn();
console.log(gameController.playersTurn);
console.log(gameController.getRound());