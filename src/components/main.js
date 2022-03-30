import board from "./board";

const main = () => {
    const element = document.createElement('main');

    element.setAttribute('class', 'main');

    element.appendChild(board());
    element.appendChild(board());

    return element;
};

export default main;