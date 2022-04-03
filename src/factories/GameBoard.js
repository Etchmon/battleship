import Ship from "./Ship";

class GameBoard {
    constructor(player) {
        this.player = player;
        this.shipArray = [];
        this.fleet = {
            stealth: new Ship('stealth', 2),
            cruiser: new Ship('cruiser', 3),
            submarine: new Ship('submarine', 3),
            destroyer: new Ship('destroyer', 4),
            carrier: new Ship('carrier', 5),
        }
        this.hits = [];
        this.misses = [];
    };

    placeShip(ship) {
        this.shipArray.push(ship);
        this.updateDisplay();
    };

    receiveAttack(attack) {
        const arr = [];
        this.shipArray.forEach(ship => {
            if (ship.position.includes(attack)) {
                arr.push(attack);
                ship.hit();
                this.hits.push(attack);
            };
        });

        if (arr.length === 0) {
            this.misses.push(attack);
        };

        this.updateDisplay();
    };

    checkForLoss() {
        if (this.shipArray.every(ship => ship.isSunk()) === true) {
            return true;
        } else {
            return false;
        };
    };

    updateDisplay() {
        const grid = document.querySelector(`.${this.player}`);
        this.shipArray.forEach(ship => {
            ship.position.forEach(pos => {
                const tile = grid.querySelector(`.${pos}`);
                tile.classList.add('ship');
            });
        });
        this.hits.forEach(hit => {
            const tile = grid.querySelector(`.${hit}`);
            tile.classList.add('hit');
        });
        this.misses.forEach(miss => {
            const tile = grid.querySelector(`.${miss}`);
            tile.classList.add('miss');
        });
    };

};

export default GameBoard;