import gameController from "../controllers/gameController";

const header = () => {
    const element = document.createElement('header');
    const btn = document.createElement('button');

    Object.assign(btn, {
        innerHTML: 'restart',
        onclick: gameController.restart,
    });

    Object.assign(element, {
        className: 'header',
        innerHTML: 'BattleShip'
    });

    element.appendChild(btn);
    return element;
};

export default header;