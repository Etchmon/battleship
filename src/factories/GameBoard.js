import Ship from "./Ship";

class GameBoard {
    constructor() {
        this.shipArray = [];
        this.board = [];
        this.hits = [];
        this.misses = [];
    };

    placeShip(name, position) {
        const ship = new Ship(name, position);
        this.shipArray.push(ship);
    };

    receiveAttack(attack) {
        this.shipArray.forEach(ship => {
            if (ship.position.includes(attack)) {
                ship.hit();
                this.hits.push(attack);
            } else {
                this.misses.push(attack);
            };
        });
    };

    checkForLoss() {
        if (this.shipArray.every(ship => ship.isSunk()) === true) {
            return true;
        } else {
            return false;
        }
    }
};

export default GameBoard;