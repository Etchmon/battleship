import Ship from "../factories/Ship";

test('Ship gets hit', () => {
    const ship = new Ship(5, "BattleShip");
    ship.hit();
    ship.hit();
    expect(ship.hits).toStrictEqual(['hit', 'hit']);
});

test('Ship gets sunk', () => {
    const ship = new Ship(5, "BattleShip");
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
});

test('Ship is not sunk', () => {
    const ship = new Ship(5, "BattleShip");
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
});

