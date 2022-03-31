import '../styles/reset.css';
import '../styles/style.css';
import _ from 'lodash';

import header from './components/header';
import main from './components/main';

import { Computer, Player } from './factories/Player';
import GameBoard from './factories/GameBoard';
import Ship from './factories/Ship';
// -------------------BattleShip----------------------
// make 5 ships using ship factory of all different lengths
// player drags ship and places them on map.
// push the placement values into that ships positon array when dropped into gameboard
// once all 5 ships are placed onto gameboard, enable start button
// push all the ship objects into their gameboard array
// when start button is pressed, randomly place the computers ships onto the opposite game board
// when a guess is placed, check the gameboards ship objects positions.
// If there is a match, send the guess position through the hit method of ship
// mark the position on gameboard as a hit and make tile innactive
// check if the ship is sunk with the issunk method
// check if all ships on gameboard have been sunk
// If there is no match, mark the position on gameboard as a miss and make tile innactive

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
        console.log(cGrid, tiles);

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
