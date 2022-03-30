const header = () => {
    const element = document.createElement('header');

    Object.assign(element, {
        className: 'header',
        innerHTML: 'BattleShip'
    });

    return element;
};

export default header;