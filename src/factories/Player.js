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

    attack(attack, board) {
        board.receiveAttack(attack)
    };
};

export { Player, Computer };