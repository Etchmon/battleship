import { Player, Computer } from '../factories/Player';

const gameController = (() => {
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

        player.board.fleet.cruiser.position = ['B1', 'B2', 'B3'];
        player.board.placeShip(player.board.fleet.cruiser);
    };

    return { initGame }
})();

export default gameController;