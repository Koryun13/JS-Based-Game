Animal = require('./animal');
module.exports = class Gishatich extends Animal {
    constructor(x, y, index) {

        super(x, y, index);

        this.energy = Math.round(Math.random() * 16);
        this.speed = 16;
        this.multiply = Math.round(Math.random() * 16);
        matrix[this.y][this.x] = this.index;
    }

    sharjvel() {
        var vand1;
        vand1 = this.yntrelVandak(0);
        var vand = vand1[Math.floor(Math.random() * this.yntrelVandak(1).length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
        }
    }

    utel() {
        this.energy--;
        var num = [2, 2.5];
        var num_choice = num[Math.round(Math.random() * num.length)];
        var vand1;
        vand1 = this.yntrelVandak(num_choice);
        var vand = vand1[Math.floor(Math.random() * vand1.length)];
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        if (this.index % 2 == 0) {
            var Ffinder = this.yntrelVandak(this.index + 0.5)
            if (Ffinder) {
                var vand1;
                vand1 = this.yntrelVandak(0);
                var vand = vand1[Math.floor(Math.random() * vand1.length)];
                if (vand && this.energy >= this.speed * 2) {
                    this.energy = 1;
                    var newgishatich = new Gishatich(vand[0], vand[1], 3);
                    gishatichArr.push(newgishatich);
                }
            }
        }
    }

    mahanal() {
        if (this.energy >= this.speed / 2) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
}