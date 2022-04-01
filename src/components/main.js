import board from "./board";
import shipYard from "./shipYard";

const main = () => {
    const element = document.createElement('main');

    element.setAttribute('class', 'main');

    element.appendChild(shipYard());
    element.appendChild(board('player'));
    element.appendChild(board('computer'));

    return element;
};

export default main;