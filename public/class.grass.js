 Animal = require('./animal'); 
  
 module.exports = class Grass extends Animal {
      constructor(x, y, index,ser)  { 
        super(x, y, index);
        this.ser =(ser ==0)? "M": "F";
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
        matrix[this.y][this.x] = this.index;
        

    }

    
    mul() {
        this.multiply++;
        var vand; 
        if(ser == "M"){ 
        var Ffinder = this.yntrelVandak(this.index+1)
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
