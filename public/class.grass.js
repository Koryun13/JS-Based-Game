 Animal = require('./animal'); 
  
 module.exports = class Grass extends Animal {
      constructor(x, y, index, ser)  { 
        super(x, y, index);
        this.ser =(ser ==0)? "M": "F";
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
        matrix[this.y][this.x] = this.index;
        

    }
    sharjvel() {
        var vand1; 
        vand1 = this.yntrelVandak(0);
        var vand = vand1[Math.floor(Math.random() * vand1.length)];
        if (vand && this.multiply >= this.speed / 4) {
          //  this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 1.5;
            this.multiply = 0;
        }
    }
    
    mul() {
        this.multiply++;
        var vand; 
        if(this.ser == "M"){ 
        var Ffinder = this.yntrelVandak(this.index+0.5)
        if(Ffinder){  
         vand = this.yntrelVandak(0);
        this.direction = vand[Math.floor(Math.random() *vand.length)];
        if (this.multiply >= this.speed && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
} 
        }


       
    }
}
