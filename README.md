# Tic Tac Toe

## Logs

### Log #1 

Created boiler plate files. Added a CSS reset from Josh C.

I'm struggling to think of where to begin, so I'm going to kind of just write how I percieve tic tac toe to be, it's rules etc, and then think of that in the context of objects, constructors, modules, and revealed modules?

**Rules of Tic-Tac-Toe**: 

1. There are two players.
2. Each player takes turns placing their respective piece(x or o) on the board.
3. If a player manages to place three of their pieces in a single line, whether horizontal, diagonal, or vertical, they win.
4. If the entire board becomes full with pieces, the game is a tie.

**Pseudocode concepts**

The instructions say to have a object for the gameboard that contains an array. 

My initial thought is to use a 2D array for the piece placement. I'll need to brush up on 2D arrays in javascript. In theory thats an array[3][3]. or maybe [2][2]? 

Create a 2D array 3x3, each index will be null until filled with either an x or an o. 
### gameBoard object

The gameBoard object will have the following 
#### Attributes 

board = 2D, 3x3 array
piecesPlaced = integer counter that begins at zero

#### Methods

1. placePiece(piece,x, y) : checks if x,y coordinate is null, if so, places piece based on player number. If unsuccessful return 0, otherwise return 1.

### Player object
The player element will contain the following 

#### Attributes
name = name of player. Changeable.
pieceType = symbol for players, for now unchangeable. 

#### Methods

changeName = allows user to change name of player. For DOM implementation  make the name display a placeholder input.
askToPlacePiece(pieceType, x, y) = calls gameBoards placePiece function with the x y values provided plus player code(either 1 or 2). If placePiece is unsuccessful it remains that players turn, otherwise call gameLogic's nextTurn() function.

### gameLogic object

The gameLogic object will contain the following

#### Attributes

playersTurn = integer value of 1 or 2, reflective of 2 players.
winner = null by default, changed by checkForEndOfGame to player.name of winning player.
roundsCount = number of rounds that have occured, starts at 1
#### Methods

1. checkForEndOfGame: check each row, each column, and spots 1-5-9 and 3-5-7, if any of them add up to 3 of one piece, set winner equal to the winning player name. If the total number of pieces on the board equals 9 and the win condition hasn't been met, it's a tie.
2. nextTurn(): toggle playersTurn attribute. Then increcement roundsCount.
3. playTurn(playersTurn(), x, y): based on which players turn it is, call that players askToPlacePiece() method until it is successful. Then call getBoard() method and checkForEndOfGame method, if it returns false call nextTurn(), if it returns true call endGame() method.
4. endGame(): display gameLogic.winner.
5. playGame(): while winner is null, call playTurn method, 

### displayController object

The displayController object will have the following

#### Methods

printBoard(): take gameBoard.board and print it out.