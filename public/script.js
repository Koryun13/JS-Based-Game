var socket = io.connect('http://localhost:3000');


var matrix;
var w = 30;
var h = 30;
var side = 24;
var grassArr = [], xotakerArr = [], gishatichArr = [], alienArr = [];

function setup() {
    
  socket.on('send matrix',function(data) { 
        var matrix = data;
});
 
}
function draw() {
    background("#acacac");
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if(matrix[y][x] == 1) {
                fill("green");
            }
            else if(matrix[y][x] == 2) {
                fill("yellow");
            }
            else if(matrix[y][x] == 3) {
                fill("red");
            }
            else if(matrix[y][x] == 4){
                fill("black ")
            }
            rect(x * side, y * side, side, side);
        }

    }
    

}