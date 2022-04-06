import Ship from "./Ship";
import displayController from "../controllers/displayController";

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

    resetShips() {
        this.shipArray = [];
        this.updateDisplay();
    }

    placeShip(ship) {
        this.shipArray.push(ship);
        this.updateDisplay();
    };

    placeAllShips() {
        const fleet = Object.entries(this.fleet);
        console.log(fleet);
        const htmlBoard = Array.from(document.querySelector('.computer').childNodes);
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        const openSpaces = [];
        console.log(htmlBoard);
        htmlBoard.forEach(row => {
            const tiles = Array.from(row.childNodes);
            tiles.forEach(tile => {
                if (tile.classList.length < 3) {
                    openSpaces.push(tile.classList[0]);
                };
            });
        });

        fleet.forEach(ship => {
            let randomSpace = openSpaces[Math.floor(Math.random() * openSpaces.length)];
            const letter = randomSpace.split('')[0];
            const num = randomSpace.split('')[1];
            ship[1].position.push(randomSpace);
            for (let i = ship[1].length - 1; i > 0; i--) {
                let coord = Number(num) + i;
                if (coord > 9) {
                    coord = num - i;
                }
                this.checkPlacement(letter + coord, openSpaces);
                ship[1].position.push(letter + coord);
            };

            this.shipArray.push(ship[1]);
        });

        this.updateDisplay();
    };

    checkPlacement(coord, openSpaces) {
        const grid = document.querySelector(`.${this.player}`);
        this.shipArray.forEach(ship => {
            if (ship.position.includes(coord)) {
                ship.position = [];
                let randomSpace = openSpaces[Math.floor(Math.random() * openSpaces.length)];
                const letter = randomSpace.split('')[0];
                const num = randomSpace.split('')[1];
                console.log(randomSpace);
                ship.position.push(randomSpace);
                for (let i = ship.length - 1; i > 0; i--) {
                    let coord = Number(num) + i;
                    if (coord > 9) {
                        coord = num - (ship.length - i);
                    }
                    this.checkPlacement(letter + coord);
                    ship.position.push(letter + coord);
                };
            };
        });
    };


    receiveAttack(attack) {
        const arr = [];
        this.shipArray.forEach(ship => {
            if (ship.position.includes(attack)) {
                arr.push(attack);
                ship.hit();
                this.hits.push(attack);
                if (ship.isSunk()) {
                    displayController.setStatus(`${this.player}'s ${ship.name} has been sunk!`)
                };
            };
        });

        if (arr.length === 0) {
            this.misses.push(attack);
        };

        if (this.checkForLoss()) {
            displayController.setStatus(`${this.player} has won!`);
            document.querySelector('header').querySelector('button').innerHTML = 'Play Again?';
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
        if (this.shipArray.length < 1) {
            const tiles = Array.from(document.querySelectorAll('.tile'));
            tiles.forEach(tile => {
                if (tile.className.includes('ship') || tile.className.includes('hit') || tile.className.includes('miss')) {
                    tile.classList.remove('ship');
                    tile.classList.remove('hit');
                    tile.classList.remove('miss');
                };
            });

            return;
        };
        const grid = document.querySelector(`.${this.player}`);
        if (this.player === 'player') {
            this.shipArray.forEach(ship => {
                ship.position.forEach(pos => {
                    const tile = grid.querySelector(`.${pos}`);
                    tile.classList.add('ship');
                });
            });
        };

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