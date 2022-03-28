import GameBoard from "./GameBoard"

class Player {
    constructor() {
        this.board = new GameBoard;
    };

    attack(attack, board) {
        board.receiveAttack(attack);
    };
};

class Computer {
    constructor() {
        this.board = new GameBoard;
    };

    attack(attack, board) {
        board.receiveAttack(attack)
    };
};

export { Player, Computer };