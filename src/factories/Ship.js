class Ship {
    constructor(length, name) {
        this.length = length;
        this.name = name;
        this.position = [];
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