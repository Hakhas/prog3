let LivingCreature = require('./LivingCreature');

 module.exports=class Davajan extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 15;
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
        var emptyCells = this.chooseCell(0);
		var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 3;
            davajan.push(new Davajan(x, y))
        }


    }

    move() {

		var emptyCells = this.chooseCell(0);
		var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

        }





    };
    eat() {

        var emptyCells = this.chooseCell(2);
		var food = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (food) {
            let x = food[0];
            let y = food[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0

            for (let i = 0; i < grasseaterArr.length; i++) {
                if (grasseaterArr[i].x == x && grasseaterArr[i].y == y) {
                    grasseaterArr.splice(i, 1);
                }

            }


            this.x = x
            this.y = y
            this.energy++

            if (this.energy > 10) {
                this.mul()
            }

        } else {
            this.move()
            this.energy--
            if (this.energy <= 0) {
                this.die()

            }

        }



    };
    
    die() {

        matrix[this.y][this.x] = 0
        for (let i = 0; i < davajan.length; i++) {
            if (davajan[i].x === this.x && davajan[i].y === this.y) {

                davajan.splice(i, 1)

            }
        }

    }
}