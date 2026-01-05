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

//console tests
const demoBoard = createGameBoard();
const player1 = createPlayer("August", "X");
console.log(player1.getName());
player1.changeName("Bob");
console.log(player1.getName());
demoBoard.printBoard();
demoBoard.placePiece("x", 0,0);
demoBoard.printBoard();

console.log(player1.askToPlacePiece(1,1, demoBoard));
