class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        var found = []
        for (let i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mul() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1

            grasssses.push(new Grass(newX, newY))
            this.multiply = 0;
        }
    }
}


class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
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

    chooseCell(char) {

        this.newcoordinates()
        let found = [];
        // console.log();

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] === char) {

                    found.push(this.directions[i])
                }
            }


        }
        return found;
    };

    mul() {
        let empty = random(this.chooseCell(0))

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 2;
            grasseaterArr.push(new GrassEater(x, y))
            // this.energy = 0
        }


    }

    move() {

        let empty = random(this.chooseCell(0)) //[2,3]

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

        let food = random(this.chooseCell(1)); //[8,6]

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
            // grasseaterArr.push(new GrassEater(x, y))
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

        matrix[this.y][this.x] = 0
        for (let i = 0; i < grasseaterArr.length; i++) {
            if (grasseaterArr[i].x === this.x && grasseaterArr[i].y === this.y) {

                grasseaterArr.splice(i, 1)

            }
        }


    }
}

class Davajan {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
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

    chooseCell(char) {

        this.newcoordinates()
        let found = [];
        // console.log();

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] === char) {

                    found.push(this.directions[i])
                }
            }


        }
        return found;
    };

    mul() {
        let empty = random(this.chooseCell(0))

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 3;
            davajan.push(new Davajan(x, y))
            // this.energy = 0
        }


    }

    move() {

        let empty = random(this.chooseCell(0)) //[2,3]

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            // grasseaterArr.push(new GrassEater(x,y))

            this.x = x;
            this.y = y;

        }





    };
    eat() {

        let food = random(this.chooseCell(2)); //[8,6]

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
            //grasseaterArr.push(new GrassEater(x,y))
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

class Melkon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
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

    chooseCell(char) {

        this.newcoordinates()
        let found = [];
        // console.log();

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] === char) {

                    found.push(this.directions[i])
                }
            }


        }
        return found;
    };

    mul() {
        let empty = random(this.chooseCell(0))

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 4;
            melkon.push(new Melkon(x, y))

        }


    }

    move() {

        let empty = random(this.chooseCell(0)) //[2,3]

        this.energy--
        if (empty) {


            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            // grasseaterArr.push(new GrassEater(x,y))

            this.x = x;
            this.y = y;
            this.energy = 20

        }





    };
    eat() {

        let food = random(this.chooseCell(3)); //[8,6]

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
            //grasseaterArr.push(new GrassEater(x,y))
            this.energy+=2


            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()
            // if(this.energy <= 0){
            //     //this.die()

            // }

        }



    };
    eat1() {

        let food = random(this.chooseCell(2)); //[8,6]

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
            //grasseaterArr.push(new GrassEater(x,y))
            this.energy++
            
            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()
            // this.energy--
            // if(this.energy <= 0){
            //     //this.die()

            // }

        }



    };
    eat2() {

        let food = random(this.chooseCell(1)); //[8,6]

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
            //grasseaterArr.push(new GrassEater(x,y))
            this.energy++
            

            if (this.energy > 15) {
                this.mul()
            }

        } else {
            this.move()
            // this.energy--
            // if(this.energy <= 0){
            //     //this.die()

            // }

        }



    };
    // die() {

    //         matrix[this.y][this.x] = 0
    //         for (let i = 0; i < melkon.length; i++) {
    //             if (davajan[i].x === this.x && melkon[i].y === this.y) {

    //                 melkon.splice(i, 1)

    //             }
    //         }

    // }
}