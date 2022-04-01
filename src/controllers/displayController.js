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

    const drag = (ev) => {
        console.log(ev);
    };

    function allowDrop(e) {
        e.preventDefault();
        // console.log(e.srcElement.className.split(' ')[0]);
        console.log(e);
    };

    const drop = () => {
        const pGrid = document.querySelector('player');
        console.log(pGrid.querySelector('.tile'));
    };

    return { createDom, drag, drop, allowDrop };
})();

export default displayController;