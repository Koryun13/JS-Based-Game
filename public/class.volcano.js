Animal = require('./animal');

module.exports = class Volcano extends Animal {
    constructor(x, y, index) {
        super(x, y, index);
        matrix[this.y][this.x] = this.index;
    }

    cell() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                found.push(this.directions[i]);
            }
        }
        return found;
    }

    burn() {
        var vand = this.cell();
        var vand1
        for (var j in vand) {

            vand1 = vand[j];
            if (matrix[vand1[0]][vand1[1]] == 1 || matrix[vand1[0]][vand1[1]] == 1.5) {
                for (var i in grassArr) {
                    if (grassArr[i].x == vand1[0] && grassArr[i].y == vand1[1]) {
                        grassArr.splice(i, 1);
                        matrix[vand1[0]][vand1[1]] = 6;

                    }
                }
            }

            if (matrix[vand1[0]][vand1[1]] == 2 || matrix[vand1[0]][vand1[1]] == 2.5) {
                for (var i in xotakerArr)
                    if (xotakerArr[i].x == vand1[0] && xotakerArr[i].y == vand1[1]) {
                        xotakerArr.splice(i, 1);

                        matrix[vand1[0]][vand1[1]] = 6;

                    }

            }

            if (matrix[vand1[0]][vand1[1]] == 3 || matrix[vand1[0]][vand1[1]] == 3.5) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == vand1[0] && gishatichArr[i].y == vand1[1]) {
                        gishatichArr.splice(i, 1);
                        matrix[vand1[0]][vand1[1]] = 6;
                    }
                }

            }
            if (matrix[vand1[0]][vand1[1]] == 4) {
                for (var i in alienArr) {
                    if (alienArr[i].x == vand1[0] && alienArr[i].y == vand1[1]) {
                        alienArr.splice(i, 1);
                        matrix[vand1[0]][vand1[1]] = 6;

                    }
                }
            }

        }
    }




};
