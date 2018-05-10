class Alien extends Animal {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = Math.round(Math.random() * 20);
        this.speed = 24;
        this.multiply = Math.round(Math.random() * 20);
        matrix[this.y][this.x] = this.index;
        this.numbers = [1, 2, 3];
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
        sharjvel() {
            var vand = random(this.yntrelVandak(0));
            if (vand && this.multiply >= this.speed / 4) {
                this.energy--;
                matrix[this.y][this.x] = 0;
                this.x = vand[0]; this.y = vand[1];
                matrix[this.y][this.x] = 3;
            }
        }

        utel() {
            this.energy--;
            var num = random(this.numbers);
            var vand = random(this.yntrelVandak(num));
            if (vand && this.multiply >= this.speed / 2) {
                this.energy += this.speed / 2;
                matrix[this.y][this.x] = 0;
                this.x = vand[0]; this.y = vand[1];
                matrix[this.y][this.x] = 4;

                if (num == 1) {
                    for (var i in grassArr) {
                        if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                            grassArr.splice(i, 1);
                        }
                    }
                }
                if (num == 2) {
                    for (var i in xotakerArr) {
                        if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                            xotakerArr.splice(i, 1);
                        }
                    }
                    
                }
                if(num == 3){
                    for(var i in gishatichArr ){
                        if(gishatichArr[i].x == this.x && gishatichArr[i].y == this.y){
                            gishatichArr.splice(i,1);
                        }
                    }
                }
            }
        
            else this.sharjvel();
        }

        bazmanal() {
            var vand = random(this.yntrelVandak(0));
            if (vand && this.energy >= this.speed) {
                this.energy = 1;
                var newalien = new Alien(vand[0], vand[1], 4);
                alienArr.push(newalien);
            }
        }

        mahanal() {
            if (this.energy <= -(this.speed / 4)) {
                matrix[this.y][this.x] = 0;
                for (var i in alienArr) {
                    if (alienArr[i].x == this.x && alienArr[i].y == this.y) {
                         alienArr.splice(i, 1);
                    }
                }
            }
        }

    };