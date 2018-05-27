var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
global._ = require('underscore');
var fs = require('fs');



var Grass = require("./public/class.grass");
var Xotaker = require("./public/class.eatgrass");
var Gishatich = require("./public/class.predator");
var Alien = require("./public/class.alien");
var Volcano = require("./public/class.volcano");
// app.set("port", (process.env.PORT || 5000) );

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

global.matrix = [];
w = 30;
h = 30;
var  c = 0, d = 1;
var side = 24;
global.grassArr = [];
global.xotakerArr = [],
global.gishatichArr = [],
global.alienArr = [];
var newvolcano, newvolcano1;
app.get("/", function (req, res) {
    res.redirect("public");
});
server.listen(5000);




function genMatrix(w, h) {
    var matrix1 = [];
    for (var y = 0; y < h; y++) {
        matrix1[y] = [];
        for (var x = 0; x < w; x++) {
            r = Math.floor(Math.random() * 91);
            var n = (Math.round(Math.random())) / 2;
            var n1 = (Math.round(Math.random())) / 2;
            var n2 = (Math.round(Math.random())) / 2;
            if (r < 50) r = 0;
            else if (r < 70) r = 1 + n;
            else if (r < 80) r = 2 + n1;
            else if (r < 90) r = 3 + n2;
            else if (r < 95) r = 4;

            matrix1[y][x] = r;
        }
    }
    return matrix1;

}

var statistic = {
    "rotnum": 0,
    "grass":0,
    "eatgrass":0,
    "predator":0,
    "alien":0,

    "rotnum1": 0,
    "grass1":0,
    "eatgrass1":0,
    "predator1":0,
    "alien1":0,

    "rotnum2": 0,
    "grass2":0,
    "eatgrass2":0,
    "predator2":0,
    "alien1":0
     
}





weather = "Summer";

setInterval(function () {
    if (weather == "Summer") {
        weather = "Winter";
    }

    else if (weather == "Winter") {
        weather = "Summer";

    }
}, 5000);

setTimeout(function () {       
    newvolcano = new Volcano(15,15,5); 
    newvolcano1 = new Volcano(8,8,5);
}, 7000);


matrix = genMatrix(30, 30);


setInterval(function () {
    

for (var y in matrix) {
    for (var x in matrix[y]) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x * 1, y * 1, 1));
        }
        else if (matrix[y][x] == 1.5) {
            grassArr.push(new Grass(x * 1, y * 1, 1.5));
        }
        else if (matrix[y][x] == 2) {
            xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
        }
        else if (matrix[y][x] == 2.5) {
            xotakerArr.push(new Xotaker(x * 1, y * 1, 2.5));
        }
        else if (matrix[y][x] == 3) {
            gishatichArr.push(new Gishatich(x * 1, y * 1, 3));
        }
        else if (matrix[y][x] == 3.5) {
            gishatichArr.push(new Gishatich(x * 1, y * 1, 3.5));
        }
        else if (matrix[y][x] == 4) {
            alienArr.push(new Alien(x * 1, y * 1, 4));
        }

    }
}
   

    
    if (weather == "Summer") {
        for (var i in grassArr) {
            grassArr[i].mul();
            grassArr[i].mul();

        }

        for (var i in xotakerArr) {
            xotakerArr[i].bazmanal();
            xotakerArr[i].utel();
            xotakerArr[i].utel();
            xotakerArr[i].mahanal();
        }

        for (var i in gishatichArr) {
            gishatichArr[i].bazmanal();
            gishatichArr[i].utel();
            gishatichArr[i].mahanal();
        }
        for (var i in alienArr) {
            alienArr[i].bazmanal();
            alienArr[i].utel();
            alienArr[i].mahanal();
        }

    }
    else {

        for (var i in grassArr) {
            grassArr[i].sharjvel();

        }
        for (var i in xotakerArr) {
            xotakerArr[i].sharjvel();
            xotakerArr[i].mahanal();
        }
        for (var i in gishatichArr) {
            gishatichArr[i].utel();
           // gishatichArr[i].utel();
            gishatichArr[i].mahanal();
        }
        for (var i in alienArr) {
            alienArr[i].bazmanal();
           // alienArr[i].utel();
            alienArr[i].mahanal();
        }
       
    }
   
       if(newvolcano){ 
        newvolcano.burn()
       }
       if(newvolcano1){
           newvolcano1.burn();
       }

    

}, 20);
 var myJSON
 file = 'data.json';
 interval = setInterval(function () {
    c++ 
    if(c==60){
        statistic.rotnum = c;
        statistic.grass = grassArr.length;
        statistic.eatgrass = xotakerArr.length;
        statistic.predator = gishatichArr.length;
        statistic.alien = alienArr.length;
        
        
    }
    if(c == 120){
        statistic.rotnum1 = c;
        statistic.grass1 = grassArr.length;
        statistic.eatgrass1 = xotakerArr.length;
        statistic.predator1 = gishatichArr.length;
        statistic.alien1 = alienArr.length;
    }
    if(c == 180){
        statistic.rotnum2 = c;
        statistic.grass2 = grassArr.length;
        statistic.eatgrass2 = xotakerArr.length;
        statistic.predator2 = gishatichArr.length;
        statistic.alien2 = alienArr.length;
        myJSON = JSON.stringify( statistic);
        fs.writeFileSync(file,myJSON);
        clearInterval(interval);
    }
      
}, 20);
 




io.on('connection', function (socket) {
   

    setInterval(function () {
        io.sockets.emit('send matrix', matrix);
    }, 10);

});