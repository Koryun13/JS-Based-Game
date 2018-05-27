
var socket = io.connect('http://localhost:5000');
window.onload == function () {
    var pTag = document.getElementById("pTag");
};
var matrix;
var w = 30;
var h = 30;
var side = 24;
var i = 0;
function setup() {
    createCanvas(side * w, side * h);
    background("#acacac");
    socket.on('send matrix', function (data) {
        matrix = data;
    });

}

weather = "Summer";

setInterval(function () {
    if (weather == "Summer") {
        weather = "Winter";
        pTag.innerHTML = "Winter";

    }

    else if (weather == "Winter") {
        weather = "Summer";
        pTag.innerHTML = "Summer";

    }



}, 5000);

function draw() {
    if (i == 0) i = 1; else i = 0;
    background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1 && weather == "Summer") {
                fill("#007f00");
            }
            else if (matrix[y][x] == 1.5 && weather == "Summer") {
                fill("#00ff00");
            }
            else if (matrix[y][x] == 1 && weather == "Winter") {
                fill("white");
            }
            else if (matrix[y][x] == 1.5 && weather == "Winter") {
                fill("#white");
            }

            else if (matrix[y][x] == 2) {
                fill("#7f7f00");
            }
            else if (matrix[y][x] == 2.5) {
                fill("#FFFF00");
            }

            else if (matrix[y][x] == 3) {
                fill("#7f0000");
            }
            else if (matrix[y][x] == 3.5) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5 && i == 0) {
                fill("#ff0000");
            }
            else if (matrix[y][x] == 5 && i == 1) {
                fill("black");
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
            }

            rect(x * side, y * side, side, side);
        }

    }

}



