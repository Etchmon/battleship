class Ship {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.length = this.position.length;
        this.hits = [];
    };

    hit() {
        this.hits.push('hit');
    };

    isSunk() {
        if (this.hits.length == this.length) {
            return true;
        } else {
            return false;
        };
    };
};

export default Ship;