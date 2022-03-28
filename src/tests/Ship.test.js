// import { test } from "@jest/globals";
import Ship from "../factories/Ship";

const ship = new Ship(5, "BattleShip");

test('Ship gets hit', () => {
    ship.hit();
    expect(ship.hits).toStrictEqual(['hit']);
})