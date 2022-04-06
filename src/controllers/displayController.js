import header from '../components/header';
import main from '../components/main';
import _ from 'lodash';

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

    const resetMain = () => {
        const content = document.querySelector('#content');
        const mainOld = document.querySelector('.main');

        content.removeChild(mainOld);
        content.appendChild(main());

        const cGrid = document.querySelector('.computer');
        cGrid.classList.add('hide');
    };

    const setStatus = (status) => {
        const element = document.querySelector('.status');

        element.innerHTML = status;
    };



    return { createDom, rotateShips, resetMain, setStatus };
})();

export default displayController;