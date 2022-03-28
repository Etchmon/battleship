import GameBoard from "../factories/GameBoard";

test('Place ship', () => {
    const board = new GameBoard();
    board.placeShip('Cruiser', ['A1', 'A2', 'A3']);
    expect(board.shipArray).toEqual([{
        name: 'Cruiser',
        position: ['A1', 'A2', 'A3'],
        length: 3,
        hits: [],
    }]);
});

test('Place multiple ships', () => {
    const board = new GameBoard();
    board.placeShip('Cruiser', ['A1', 'A2', 'A3']);
    board.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);
    board.placeShip('Destroyer', ['A1', 'A2', 'A3', 'A4']);
    board.placeShip('Submarine', ['A1', 'A2', 'A3']);
    board.placeShip('Stealth', ['A1', 'A2']);
    expect(board.shipArray).toEqual([
        {
            name: 'Cruiser',
            position: ['A1', 'A2', 'A3'],
            length: 3,
            hits: [],
        },
        {
            name: 'Carrier',
            position: ['A1', 'A2', 'A3', 'A4', 'A5'],
            length: 5,
            hits: [],
        },
        {
            name: 'Destroyer',
            position: ['A1', 'A2', 'A3', 'A4'],
            length: 4,
            hits: [],
        },
        {
            name: 'Submarine',
            position: ['A1', 'A2', 'A3'],
            length: 3,
            hits: [],
        },
        {
            name: 'Stealth',
            position: ['A1', 'A2'],
            length: 2,
            hits: [],
        }]);
});

test('Receive an attack that hits one of your ships', () => {
    const board = new GameBoard();
    board.placeShip('Cruiser', ['A1', 'A2', 'A3']);
    board.receiveAttack('A1');
    expect(board.hits).toEqual(['A1']);
});

test('Check if all ships have been sunk', () => {
    const board = new GameBoard();
    board.placeShip('Cruiser', ['A1', 'A2', 'A3']);
    board.placeShip('Stealth', ['B1', 'B2']);
    board.receiveAttack('A1');
    board.receiveAttack('A2');
    board.receiveAttack('A3');
    board.receiveAttack('B1');
    board.receiveAttack('B2');
    expect(board.checkForLoss()).toBeTruthy();
});

test('Check if all ships have not been sunk', () => {
    const board = new GameBoard();
    board.placeShip('Cruiser', ['A1', 'A2', 'A3']);
    board.placeShip('Stealth', ['B1', 'B2']);
    board.receiveAttack('A1');
    board.receiveAttack('A2');
    board.receiveAttack('A3');
    board.receiveAttack('B1');
    expect(board.checkForLoss()).toBeFalsy();
});