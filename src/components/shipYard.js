import gameController from "../controllers/gameController";
import displayController from "../controllers/displayController";
const shipYard = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'ship-yard');
    const title = document.createElement('h1');
    const rotBtn = document.createElement('span');
    title.innerHTML = 'Ship Yard';

    Object.assign(rotBtn, {
        innerHTML: 'Rotate',
        onclick: displayController.rotateShips
    });

    const fleet = [
        {
            name: 'stealth',
            length: '2'
        },
        {
            name: 'cruiser',
            length: '3'
        },
        {
            name: 'submarine',
            length: '3'
        },
        {
            name: 'destroyer',
            length: '4'
        },
        {
            name: 'carrier',
            length: '5'
        },
    ];

    element.appendChild(title);
    element.appendChild(rotBtn);

    fleet.forEach(ship => {
        const shipDiv = document.createElement('div');

        Object.assign(shipDiv, {
            id: ship.name,
            draggable: 'true',
            ondragstart: () => gameController.drag(shipDiv),
            className: 'yard-ship'
        });

        for (let i = 0; i < ship.length; i++) {
            const cell = document.createElement('div');
            Object.assign(cell, {
                className: i + ' cell',
                onmousedown: () => cell.parentElement.dataset.cell = cell.className.split(' ')[0]
            });

            shipDiv.appendChild(cell);
        };

        element.appendChild(shipDiv);

    });









    return element;
};

export default shipYard;