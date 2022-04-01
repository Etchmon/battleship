import '../styles/reset.css';
import '../styles/style.css';
import _ from 'lodash';

import header from './components/header';
import main from './components/main';

import { Computer, Player } from './factories/Player';
import GameBoard from './factories/GameBoard';
import Ship from './factories/Ship';
// -------------------BattleShip----------------------
// Create component to hold elements that represent the ship objects
// Display the gameboards fleet of ships in the div and link them to the ship object
// Implement drag and drop, send placement coords to the ships position array.

// Edit the ship class to accept name and length arguments
// Edit ship position to be an empty array when made
// Use information from the drag and drop to set ships position on drop, clear the array before every drop
// Update the display with ships new position

const BattleShip = (() => {
    const initiateDOM = (() => {
        const content = document.createElement('section');

        content.setAttribute('id', 'content');
        content.innerHTML = _.join();

        content.appendChild(header());
        content.appendChild(main());

        document.body.appendChild(content);
    })();

    const gameStart = (() => {
        const player = new Player();
        const computer = new Computer();
        const cGrid = document.querySelector('.computer');
        const tiles = cGrid.querySelectorAll('.tile');

        tiles.forEach(tile => {
            tile.onclick = () => {
                player.attack(tile.classList[0], computer.board);
                computer.attack(player.board);
            };
        });

        computer.board.placeShip('Cruiser', ['B1', 'B2', 'B3']);
        computer.board.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);

        player.board.placeShip('Cruiser', ['B1', 'B2', 'B3'], 'player');
        player.board.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);

        player.board.receiveAttack('A1');
        player.board.receiveAttack('A0');
        player.board.receiveAttack('A2');
        player.attack('F1', computer.board);
    })();

})();
