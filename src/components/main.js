import board from "./board";

const main = () => {
    const element = document.createElement('main');

    element.setAttribute('class', 'main');

    element.appendChild(board('player'));
    element.appendChild(board('computer'));

    return element;
};

export default main;