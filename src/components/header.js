import gameController from "../controllers/gameController";

const header = () => {
    const element = document.createElement('header');
    const btn = document.createElement('button');
    const status = document.createElement('div');
    status.setAttribute('class', 'status');

    Object.assign(btn, {
        innerHTML: 'Restart',
        onclick: gameController.restart,
    });

    Object.assign(element, {
        className: 'header',
        innerHTML: 'BattleShip',
    });

    element.appendChild(status);
    element.appendChild(btn);
    return element;
};

export default header;