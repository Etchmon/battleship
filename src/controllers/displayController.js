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



    return { createDom };
})();

export default displayController;