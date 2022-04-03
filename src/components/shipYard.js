import gameController from "../controllers/gameController";
const shipYard = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'ship-yard');
    const title = document.createElement('h1');
    title.innerHTML = 'Ship Yard';
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

    fleet.forEach(ship => {
        const shipDiv = document.createElement('div');

        Object.assign(shipDiv, {
            id: ship.name,
            draggable: 'true',
            ondragstart: () => gameController.drag(shipDiv)
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