let LivingCreature = require('./LivingCreature')

module.exports = class Boy extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 9;
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
        var emptyCells = this.chooseCell(5);
        var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        var emptyCells = this.chooseCell(0);
        var empty1 = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty) {
            if (empty1) {
                let x = empty[0];
                let y = empty[1];

                matrix[y][x] = 6;
                boy.push(new Boy(x, y))
            }


        }
else{
    this.move()
}
    }

    move() {
     
       
    
        var emptyCells = this.chooseCell(0);
        var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty && this.energy > 8) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;



            this.x = x;
            this.y = y;

        }


    }
}