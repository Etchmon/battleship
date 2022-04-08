import '../styles/reset.css';
import '../styles/style.css';

import displayController from './controllers/displayController';
import gameController from './controllers/gameController';
// -------------------BattleShip----------------------

const BattleShip = (() => {

    displayController.createDom();

    gameController.initGame();

})();
