import { Player, Computer } from '../factories/Player';

const gameController = (() => {
    let currentPlayer;
    let left;
    let right;
    let domShip;
    const initGame = () => {
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

        currentPlayer = player;
    };

    const drag = (ev) => {
        let length = ev.childNodes.length;
        let pos = ev.dataset.cell;
        right = (length - 1) - pos;
        left = (length - 1) - right;
        switch (ev.id) {
            case ('stealth'):
                domShip = currentPlayer.board.fleet.stealth;
                break;
            case ('cruiser'):
                domShip = currentPlayer.board.fleet.cruiser;
                break;
            case ('submarine'):
                domShip = currentPlayer.board.fleet.submarine;
                break;
            case ('destroyer'):
                domShip = currentPlayer.board.fleet.destroyer;
                break;
            case ('carrier'):
                domShip = currentPlayer.board.fleet.carrier;
                break;
        };
    };

    function allowDrop(e) {
        e.preventDefault();
    };

    const drop = (e) => {
        const pos = e.srcElement.className.split(' ')[0];
        const posLet = pos.split('')[0];
        const posNum = pos.split('')[1];
        const posArr = [pos];
        const shipyard = document.querySelector('.ship-yard');
        const fleetArr = Object.entries(currentPlayer.board.fleet);

        for (let i = left; i > 0; i--) {
            if (left === 0) return;
            const coord = posNum - i;
            if (coord < 0 || coord > 9) return;
            posArr.push(posLet + coord);
        };

        for (let i = right; i > 0; i--) {
            if (right === 0) return;
            const coord = Number(posNum) + i;
            if (coord < 0 || coord > 9) return;
            posArr.push(posLet + coord);
        };
        domShip.position = posArr;
        currentPlayer.board.placeShip(domShip);

        shipyard.removeChild(document.querySelector(`#${domShip.name}`));

        console.log(currentPlayer.board.fleet);
        if (fleetArr.every(checkAllPlaced)) {
            console.log('Start Game');
        };
    };

    const checkAllPlaced = (ship) => {
        console.log(ship[1].position.length);
        return ship[1].position.length > 0;
    };

    return { initGame, drop, drag, allowDrop }
})();

export default gameController;