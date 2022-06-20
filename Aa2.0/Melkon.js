let LivingCreature = require('./LivingCreature');

module.exports = class Melkon extends LivingCreature {

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
        var emptyCells = this.chooseCell(0);
        var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 4;
            melkon.push(new Melkon(x, y))

        }


    }

    move() {
        var emptyCells = this.chooseCell(0);
        var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        this.energy--
        if (empty) {


            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.energy = 20

        }



    };
    eat() {
        var emptyCells = this.chooseCell(1);
        var food = emptyCells[Math.floor(Math.random() * emptyCells.length)]


        if (food) {
            let x = food[0];
            let y = food[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i = 0; i < davajan.length; i++) {
                if (davajan[i].x == x && davajan[i].y == y) {
                    davajan.splice(i, 1);
                }

            }


            this.x = x
            this.y = y
            this.energy += 2


            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()


        }



    };
    eat1() {
        var emptyCells = this.chooseCell(2);
        var food = emptyCells[Math.floor(Math.random() * emptyCells.length)]


        if (food) {
            let x = food[0];
            let y = food[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i = 0; i < grasseaterArr.length; i++) {
                if (grasseaterArr[i].x == x && grasseaterArr[i].y == y) {
                    grasseaterArr.splice(i, 1);
                }

            }


            this.x = x
            this.y = y

            this.energy++

            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()


        }



    };
    eat2() {
        var emptyCells = this.chooseCell(3);
        var food = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (food) {
            let x = food[0];
            let y = food[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i = 0; i < grasssses.length; i++) {
                if (grasssses[i].x == x && grasssses[i].y == y) {
                    grasssses.splice(i, 1);
                }

            }


            this.x = x
            this.y = y

            this.energy++


            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()

        }



    };
    eat3() {
        var emptyCells = this.chooseCell(5);
        var food = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (food) {
            let x = food[0];
            let y = food[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i = 0; i < girl.length; i++) {
                if (girl[i].x == x && girl[i].y == y) {
                    girl.splice(i, 1);
                }

            }


            this.x = x
            this.y = y

            this.energy++


            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()

        }



    }; eat4() {
        var emptyCells = this.chooseCell(6);
        var food = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (food) {
            let x = food[0];
            let y = food[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i = 0; i < boy.length; i++) {
                if (boy[i].x == x && boy[i].y == y) {
                    boy.splice(i, 1);
                }

            }


            this.x = x
            this.y = y

            this.energy++


            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()

        }



    };
}