let LivingCreature = require('./LivingCreature')

module.exports=class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
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

            matrix[y][x] = 2;
            grasseaterArr.push(new GrassEater(x, y))
        }


    }

    move() {
		var emptyCells = this.chooseCell(0);
		var empty= emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;



            this.x = x;
            this.y = y;

        }






    };
    eat() {

        var emptyCells = this.chooseCell(1);
		var food= emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (food) {
            let x = food[0];
            let y = food[1];

            matrix[this.y][this.x] = 0
            matrix[y][x] = 2;

            for (let i = 0; i < grasssses.length; i++) {
                if (grasssses[i].x == x && grasssses[i].y == y) {
                    grasssses.splice(i, 1);
                }

            }


            this.x = x
            this.y = y
            this.energy++

            if (this.energy > 20) {
                this.mul()

            }
        } else {
            this.move()
            this.energy--;
            if (this.energy <= 0) {

                this.die()
            }

        }



    };
    die() {

        matrix[this.y][this.x] = 0;
        for (let i = 0; i < grasseaterArr.length; i++) {
            if (grasseaterArr[i].x === this.x && grasseaterArr[i].y === this.y) {

                grasseaterArr.splice(i, 1)

            }
        }

    }
    }