import '../styles/reset.css';
import '../styles/style.css';

import displayController from './controllers/displayController';
import gameController from './controllers/gameController';
// -------------------BattleShip----------------------
// create a status div to display instruction messages based on the progress of the game
// when ship is sunk display the name of the ship sunk in the status div
// create a restart game function
// restart game button that appears with play again message when all ships are sunk, alert the winner
// work on transition animations

const BattleShip = (() => {

    displayController.createDom();

    gameController.initGame();

})();
