import GameBoard from "./GameBoard";

class Player {
    constructor() {
        this.board = new GameBoard('player');
    };

    attack(attack, board) {
        board.receiveAttack(attack);
    };
};

class Computer {
    constructor() {
        this.board = new GameBoard('computer');
    };

    attack(board) {
        const pGrid = document.querySelector('.player');
        const tiles = pGrid.querySelectorAll('.tile');
        const arr = Array.from(tiles);
        const activeTiles = arr.filter(this.checkAvailable);
        const random = this.chooseRandom(activeTiles);
        board.receiveAttack(random);
    };

    chooseRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)].classList[0];
    }

    checkAvailable(tile) {
        return tile.classList.length < 3;
    }
};

export { Player, Computer };