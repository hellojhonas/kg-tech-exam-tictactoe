
# Tic-Tac-Toe Game

A brief description of what this project does and who it's for

This project is a simple implementation of the Tic-Tac-Toe game using JavaScript, Node.js for the backend, and React.js for the UI.

## My Output
![tictactoe-implemented](https://user-images.githubusercontent.com/91439231/219866817-59ec58da-a54d-48ee-80bf-6f957344fe8c.PNG)

### Game Rules
Tic-Tac-Toe is a two-player game, played on a 3x3 grid. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins the game. If neither player is able to achieve this, the game ends in a draw.

## Structure

    ├── tictactoe-node (Backend)
    │   ├── server.js
    │   ├── package.json
    │   ├── node_modules
    ├── tictactoe-react (Frontend)
    │   ├── public
    │   ├── src
    │   │   ├── components
    │   │   │   ├── Board.js
    │   │   │   ├── Square.js
    │   │   ├── styles
    │   │   ├── App.js
    │   │   ├── index.js
    │   │   └── ...
    │   ├── package.json
    │   └── node_modules
    └── README.md

The project contains two main folders: tictactoe-node and tictactoe-react. The tictactoe-node folder contains the server-side code written in Node.js and the tictactoe-react folder contains the client-side code written in React.js.

## Development Environment Instructions
To set up the development environment for this project, follow these steps:

Clone this repository to your local machine
Navigate to the tictactoe-node folder in your terminal and run npm install to install the required dependencies
Run 'npm run dev' to start the server

Navigate to the tictactoe-react folder in your terminal and run 'npm install' to install the required dependencies
Run 'npm start' to start the development server

## Execution Instructions
To play the game, follow these steps:

    1. Open your web browser and navigate to http://localhost:3000
    2. The game will start automatically
    3. Crosses will always go first. Click on any cell to make your move
    4. The game will continue until one player wins or the game ends in a draw
    5. To start a new game, click on the Restart button

## Compromises
In the interest of time, some features were not implemented in this version of the game and this was written in JavaScript instead of TypeScript. Others are:

    - No multiplayer option - this version of the game only allows for one player to play against the computer.
    - No AI - the computer player will make random moves instead of using any strategy.

## Future Improvements
In future iterations of the game, the following improvements could be made:

    > Add multiplayer option - allow for two players to play against each other.
    > Improve AI - implement an AI algorithm that uses strategy to make moves.
