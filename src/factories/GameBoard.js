import Ship from "./Ship";

class GameBoard {
    constructor() {
        this.shipArray = [];
        this.board = [];
    };

    placeShip(name, position) {
        const ship = new Ship(name, position);
        this.shipArray.push(ship);
    };
}

export default GameBoard;