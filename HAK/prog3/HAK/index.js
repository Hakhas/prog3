var matrix = []
var h = +prompt("ներմուծիր դաշտի չափերը");
var p = +prompt("ներմուծիր խոտերի քանակը");
var r = +prompt("ներմուծիր խոտակերի քանակը");
var k = +prompt("ներմուծիր դավաճանի քանակը");
function generate(a, xot, xotaker, dava, melkon) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {
            matrix[i].push(0)
        }
    }
    for (var i = 0; i < xot; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (matrix[x][y] === 0) {
            matrix[x][y] = 1

        }

    }
    for (var i = 0; i < xotaker; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)

        if (matrix[x][y] === 0) {
            matrix[x][y] = 2

        }

    }
    for (var i = 0; i < dava; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)

        if (matrix[x][y] === 0) {
            matrix[x][y] = 3

        }

    } for (var i = 0; i < melkon; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)

        if (matrix[x][y] === 0) {
            matrix[x][y] = 4

        }

    }


}

generate(h, p, r, k, 1)
console.log(matrix);

side = 10
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


}


let grasssses = [];
let grasseaterArr = [];
let davajan = [];
let melkon = [];
function objectcreation() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] === 1) {

                grasssses.push(new Grass(x, y));
            } else if (matrix[y][x] === 2) {

                grasseaterArr.push(new GrassEater(x, y));
            } else if (matrix[y][x] === 3) {

                davajan.push(new Davajan(x, y));
            }
            else if (matrix[y][x] === 4) {

                melkon.push(new Melkon(x, y));
            }
        }
    }
}

// console.log(grasssses);

objectcreation()
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("grey");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            } else if (matrix[y][x] == 4) {
                fill("black");
            }


            rect(x * side, y * side, side, side);


            //
        }
    }


    for (let i = 0; i < grasssses.length; i++) {
        grasssses[i].mul()

    }
    for (let i = 0; i < grasseaterArr.length; i++) {
        grasseaterArr[i].eat()

    }
    for (let i = 0; i < davajan.length; i++) {
        davajan[i].eat()

    }
    for (let i = 0; i < melkon.length; i++) {
        melkon[i].eat()
        melkon[i].eat1()
        melkon[i].eat2()
    }
}