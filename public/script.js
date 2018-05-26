
var socket = io.connect('http://localhost:5000');

var matrix;
var w = 30;
var h = 30;
var side = 24;
// var grassArr = [], xotakerArr = [], gishatichArr = [], alienArr = [];

function setup() {
    createCanvas(side * w, side * h);
    background("#acacac");
  //  frameRate(10);
 
  socket.on('send matrix',function(data) { 
         matrix = data;
       
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
                fill("#007f00");
            }
            else if(matrix[y][x] == 1.5) {
                fill("#00ff00");
            }
            else if(matrix[y][x] == 2) {
                fill("#7f7f00");
            }
            else if(matrix[y][x] == 2.5) {
                fill("#e5e500");
            }
            else if(matrix[y][x] == 3) {
                fill("#7f0000");
            }
            else if(matrix[y][x] == 3.5) {
                fill("#e50000");
            }
            else if(matrix[y][x] == 4){
                fill("black ");
            }
            
            rect(x * side, y * side, side, side);
        }
        
    }
    
    
    
}


