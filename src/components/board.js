import gameController from "../controllers/gameController";
const board = (name) => {
    const element = document.createElement('div');
    Object.assign(element, {
        className: `${name} board`,
        ondrop: (e) => gameController.drop(e),
    });
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.className = letters[i] + ' row';

        for (let j = 0; j < 10; j++) {
            const tile = document.createElement('div');
            tile.className = (letters[i] + j) + ' tile';
            Object.assign(tile, {
                className: (letters[i] + j) + ' tile',
                ondragover: (e) => gameController.allowDrop(e, tile.className)
            });
            row.appendChild(tile);
            element.appendChild(row);
        }
    }

    return element;
}

export default board;