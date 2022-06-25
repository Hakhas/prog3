let LivingCreature = require('./LivingCreature')

module.exports = class Girl extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 20;
    }

    newcoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    };

    chooseCell(character) {
        this.newcoordinates();
        return super.chooseCell(character);

    }

    mul() {

       var emptyCells = this.chooseCell(6);
       var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]
       var emptyCell = this.chooseCell(0);
       var empty1 = emptyCells[Math.floor(Math.random() * emptyCell.length)]

        if (empty) {
            if (empty1) {
                let x = empty[0];
                let y = empty[1];

                matrix[y][x] = 5;
                girl.push(new Girl(x, y))
            }


        }
        else {
            this.move()
            this.energy--
        }

    }

    move() {


        var emptyCells = this.chooseCell(0);
        var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty && this.energy > 6) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }


    }
}