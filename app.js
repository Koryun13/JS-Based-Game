var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
global._ = require('underscore')



var Grass = require("./public/class.grass");
var Xotaker  = require("./public/class.eatgrass");
var Gishatich = require("./public/class.predator");
var Alien = require("./public/class.alien");
// app.set("port", (process.env.PORT || 5000) );

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

global._matrix;
 w = 30;
 h = 30;
var side = 24;
var grassArr = [], xotakerArr = [], gishatichArr = [], alienArr = [];

// app.listen(app.get("port"), function(){
//    console.log("Example is running on port 5000");
// });
app.get("/", function(req, res){
    res.redirect("public");
 });
server.listen(5000);




function genMatrix(w, h) {
    var matrix1 = [];
    for(var y = 0; y < h; y++) {
        matrix1[y] = [];
        for(var x = 0; x < w; x++) {
            var r = Math.floor(Math.random()*100);
            if     (r < 20) r = 0;
            else if(r < 65) r = 1;
            else if(r < 90) r = 2;
            else if(r < 95)r = 3;
            else if(r < 100)r = 4;
            matrix1[y][x] = r;
        }
    }
    return matrix1;
    
}

  matrix = genMatrix(30,30);
io.on('connection', function (socket) {
 
   io.sockets.emit('send matrix', matrix);
});

setInterval( function() {    

 for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 1) {
                grassArr.push(new Grass(x*1, y*1, 1));
            }
            else if(matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x*1, y*1, 2));
            }
            else if(matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x*1, y*1, 3));
            }
            else if(matrix[y][x] == 4) {
                alienArr.push(new Alien(x*1, y*1, 4));
            }  
      }
    }

    for(var i in grassArr) {
        grassArr[i].mul();
        
    }

    for(var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for(var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }
    for(var i in alienArr){
        alienArr[i].bazmanal();
        alienArr[i].utel();
        alienArr[i].mahanal();
    }
},100);

