import gameController from "../controllers/gameController";
const shipYard = () => {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const ship = document.createElement('div');

    element.setAttribute('class', 'ship-yard');
    Object.assign(ship, {
        id: 'ship',
        draggable: 'true',
        ondragstart: () => gameController.drag(ship)
    });
    title.innerHTML = 'Ship Yard';

    for (let i = 0; i < 3; i++) {
        const cell = document.createElement('div');
        Object.assign(cell, {
            className: i + ' cell',
            onmousedown: () => cell.parentElement.dataset.cell = cell.className.split(' ')[0]
        });

        ship.appendChild(cell);
    };



    element.appendChild(title);
    element.appendChild(ship);

    return element;
};

export default shipYard;