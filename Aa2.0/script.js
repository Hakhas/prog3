socket = io();

function main() {
    var input = document.getElementById('message');
    var input1 = document.getElementById('mes');
    var input2 = document.getElementById('mess');
    var input3 = document.getElementById('me');
    var input4 = document.getElementById('m');
    button = document.getElementById('submit')
    sub = document.getElementById("sub");

    function hey() {
        socket.emit("hey")
        socket.on("h", function (val) {
            var p1 = document.createElement("p");
            var element1 = document.getElementById("div1");
            element1.appendChild(p1);
            var p2 = document.createElement("p");
            var element2 = document.getElementById("div2");
            element2.appendChild(p2);
            var p3 = document.createElement("p");
            var element3 = document.getElementById("div3");
            element3.appendChild(p3);
            var p4 = document.createElement("p");
            var element4 = document.getElementById("div4");
            element4.appendChild(p4);
            var p5 = document.createElement("p");
            var element5 = document.getElementById("div5");
            element5.appendChild(p5);
            var p6 = document.createElement("p");
            var element6 = document.getElementById("div6");
            element6.appendChild(p6);
            p1.innerText = val.grass;
            p2.innerText = val.grassEater;
            p3.innerText = val.davajan;
            p4.innerText = val.melkon;
            p5.innerText = val.girl;
            p6.innerText = val.boy;
        })

    }

 setInterval(hey , 5000)
    function handleSubmit() {
        data = {
            val: input.value,
            data: input1.value,
            mess: input2.value,
            me: input3.value,
            m: input4.value

        }
        if (data.val != "" && data.data != "" && data.lmess != "" && data.me != "" && data.m != "") {

            socket.emit("bar", data)
        }

    }


   
    button.onclick = handleSubmit;

}

window.onload = main;
let side = 10
function setup() {

    createCanvas(55 * side, 55 * side);
    background('#acacac');


}

function nkarel(matrix, data) {


    socket.on("weather", function (data) {
        weath = data; 
       
        if (weath == "spring") {
            document.body.style.backgroundColor = "#ccffff";

        }
        if (weath == "winter") {
            document.body.style.backgroundColor = "#99e6ff";

        }
        else if (weath == "summer") {
            document.body.style.backgroundColor = "#87CEFA";

        }
        else if (weath == "autumn") {
            document.body.style.backgroundColor = "#b3cccc";

        }

    })
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                if (weath == "spring") {
                    fill("#98FB98")
                }
                else if (weath == "summer") {
                    fill("#green");
                }
                else if (weath == "winter") {
                    fill("white")
                }
                else if (weath == "autumn") {
                    fill("#DAA520")
                }
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
            else if (matrix[y][x] == 5) {
                fill("pink");
            }
            else if (matrix[y][x] == 6) {
                fill("blue");
            }


            rect(x * side, y * side, side, side);

        }
    }



}




setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
)
