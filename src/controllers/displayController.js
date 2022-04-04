import header from '../components/header';
import main from '../components/main';
import _ from 'lodash';
import gameController from './gameController';

const displayController = (() => {
    const createDom = () => {
        const content = document.createElement('section');

        content.setAttribute('id', 'content');
        content.innerHTML = _.join();

        content.appendChild(header());
        content.appendChild(main());

        document.body.appendChild(content);
    };

    const rotateShips = () => {
        const fleet = Array.from(document.querySelectorAll('.yard-ship'));

        fleet.forEach(ship => {
            const list = Array.from(ship.classList);
            if (list.includes('rotate')) {
                ship.classList.remove('rotate');
            } else {
                ship.classList.add('rotate');
            };
        });
    };



    return { createDom, rotateShips };
})();

export default displayController;