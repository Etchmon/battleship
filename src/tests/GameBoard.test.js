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