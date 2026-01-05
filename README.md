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

The gameBoard will have the following functions

1. Place piece(player,x, y) : checks if x,y coordinate is null, if so, places piece based on player number.
2. Check for win/tie: check each row, each column, and spots 1-5-9 and 3-5-7, if any of them add up to 3 of one piece, that player wins. If the total number of pieces on the board equals 9 and the win condition hasn't been met, it's a tie.

