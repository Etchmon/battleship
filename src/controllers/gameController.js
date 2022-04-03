import { Player, Computer } from '../factories/Player';

const gameController = (() => {
    let currentPlayer;
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
        console.log(ev.childNodes.length);
        let length = ev.childNodes.length;
        let pos = ev.dataset.cell;
        let right = (length - 1) - pos;
        let left = (length - 1) - right;
        console.log(right, left)
    };

    function allowDrop(e) {
        e.preventDefault();
    };

    const drop = (e) => {
        console.log(e.srcElement.className.split(' ')[0]);
        const pos = e.srcElement.className.split(' ')[0];
        const posLet = pos.split('')[0];
        const posNum = pos.split('')[1];
        const left = 1;
        const right = 1;
        const posArr = [pos]

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
        console.log(posArr);

        currentPlayer.board.fleet.cruiser.position = posArr;
        currentPlayer.board.placeShip(currentPlayer.board.fleet.cruiser);
        console.log(currentPlayer.board.fleet.cruiser)
    };

    return { initGame, drop, drag, allowDrop }
})();

export default gameController;