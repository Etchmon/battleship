const board = () => {
    const element = document.createElement('div');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.className = letters[i];

        for (let j = 0; j < 10; j++) {
            const tile = document.createElement('div');
            tile.className = letters[i] + j;
            row.appendChild(tile);
            element.appendChild(row);
        }
    }

    return element;
}

export default board;