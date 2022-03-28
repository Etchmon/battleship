import { Player, Computer } from "../factories/Player";


test('Player attacking Computer ship', () => {
    const player = new Player();
    const computer = new Computer();

    computer.board.placeShip('Cruiser', ['B1', 'B2', 'B3']);
    computer.board.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);

    player.attack('A1', computer.board);

    expect(computer.board.hits).toEqual(['A1']);
});

test('Computer attacking Player ship', () => {
    const player = new Player();
    const computer = new Computer();

    player.board.placeShip('Cruiser', ['B1', 'B2', 'B3']);
    player.board.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);

    computer.attack('A1', player.board);

    expect(player.board.hits).toEqual(['A1']);
});