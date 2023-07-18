// Program do tworzenia samochodów
// samochód ma brand, prędkość, silnik, max prędkość
// samochód może przyspieszac, zwalniac, odpalać silnik i gasić

function Auto(brand, maxSpeed){
    this.brand = brand;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.engine = false;
}

const bmw = new Auto('bmw', 140);
const mercedes = new Auto('mercedes', 190);

Auto.prototype.startEngine = function (){
    if (!this.engine){
        this.engine = true;
        console.log('silnik odpalony')
    } else {
        console.log('silnik już był odpalony')
    }
}

Auto.prototype.stopEngine = function(){
    if (this.speed === 0){
        this.engine = false;
        console.log('silnik zgaszony');
    } else {
        console.log('zatrzymaj się wpierw, zanim zgasisz silnik');
    }
}

// vmax
Auto.prototype.speedUp = function (amount){
    if (this.engine){
        this.speed = Math.min(this.speed + amount, this.maxSpeed);
        console.log(`Twoja prędkość to: ${this.speed}`)
    } else {
        console.log('odpal silnik wpierw');
    }
}
// min 0
Auto.prototype.slowDown = function (amount){
    this.speed = Math.max(this.speed - amount, 0)
    console.log(`Twoja prędkość to: ${this.speed}`)
}

bmw.speedUp(200);
bmw.startEngine()
bmw.speedUp(40);
bmw.speedUp(40);
bmw.speedUp(240);
bmw.stopEngine()
bmw.slowDown(50);
bmw.slowDown(250);
bmw.stopEngine()

