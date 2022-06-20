var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs")



app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);



matrix = [];

function generate(a, xot, xotaker, dava, melkon, girl, boy) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {
            matrix[i].push(0)
        }
    }

    for (var i = 0; i < xot; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[x][y] == 0) {
                matrix[x][y] = 1

            }
        }

    }
    for (var i = 0; i < xotaker; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

            if (matrix[x][y] == 0) {
                matrix[x][y] = 2

            }
        }

    }
    for (var i = 0; i < dava; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

            if (matrix[x][y] == 0) {
                matrix[x][y] = 3

            }
        }

    } for (var i = 0; i < melkon; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

            if (matrix[x][y] == 0) {
                matrix[x][y] = 4

            }
        }

    }

    for (var i = 0; i < girl; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

            if (matrix[x][y] == 0) {
                matrix[x][y] = 5

            }
        }

    } for (var i = 0; i < boy; i++) {
        let x = Math.round(Math.random() * a)
        let y = Math.round(Math.random() * a)
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

            if (matrix[x][y] == 0) {
                matrix[x][y] = 6

            }
        }

    }
}


function fun(data){


 
    generate(55, data.val, data.data, data.mess, 1, data.me, data.m)
 objectcreation() 

        io.sockets.emit('send matrix', matrix)
      
    
} 

weath = "winter"
function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
  
}
setInterval(weather, 5000);







grasssses = [];
grasseaterArr = [];
davajan = [];
melkon = [];
girl = [];
boy = [];

Grass = require("./Grass")
GrassEater = require("./GrassEater")
Davajan = require("./Davajan")
Melkon = require("./Melkon")
Girl = require("./GIrl")
Boy = require("./Boy")
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
            else if (matrix[y][x] === 5) {

                girl.push(new Girl(x, y));
            }
            else if (matrix[y][x] === 6) {

                boy.push(new Boy(x, y));
            }
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function game() {
    for (let i = 0; i < grasssses.length; i++) {
        grasssses[i].mul()

    }
    for (let i = 0; i < grasseaterArr.length; i++) {
        grasseaterArr[i].eat()

    }
    for (let i = 0; i < davajan.length; i++) {
        davajan[i].eat()

    }
    for (let i = 0; i < girl.length; i++) {
        girl[i].mul()

    } for (let i = 0; i < boy.length; i++) {
        boy[i].mul()

    }
    for (let i = 0; i < melkon.length; i++) {
        melkon[i].eat()
        melkon[i].eat1()
        melkon[i].eat2()
        melkon[i].eat3()
        melkon[i].eat4()
    } io.sockets.emit("send matrix", matrix);
    
  
}
setInterval(game, 1000);

io.on('connection', function (socket) {
    objectcreation();
    socket.on ("bar", fun)
   
})

