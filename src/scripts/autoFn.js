// Program do tworzenia samochodów
// samochód ma brand, prędkość, silnik, max prędkość
// samochód może przyspieszac, zwalniac, odpalać silnik i gasić

function createbmw(brand, maxSpeed){
    return {
        brand,
        speed: 0,
        maxSpeed,
        engine:false
    }
}

const bmw = createbmw('bmw', 140);
const mercedes = createbmw('mercedes', 190);

function startEngine(car){
    if (!car.engine){
        car.engine = true;
        console.log('silnik odpalony')
    } else {
        console.log('silnik już był odpalony')
    }
}

function stopEngine(car){
    if (car.speed === 0){
        car.engine = false;
        console.log('silnik zgaszony');
    } else {
        console.log('zatrzymaj się wpierw, zanim zgasisz silnik');
    }
}

// vmax
function speedUp(car, amount){
    if (car.engine){
        car.speed = Math.min(car.speed + amount, car.maxSpeed);
        console.log(`Twoja prędkość to: ${car.speed}`)
    } else {
        console.log('odpal silnik wpierw');
    }
}
// min 0
function slowDown(car, amount){
    car.speed = Math.max(car.speed - amount, 0)
    console.log(`Twoja prędkość to: ${car.speed}`)
}

speedUp(bmw, 200);
startEngine(bmw);
speedUp(bmw, 40);
speedUp(bmw, 40);
speedUp(bmw, 240);
stopEngine(bmw)
slowDown(bmw, 50);
slowDown(bmw, 250);
stopEngine(bmw);

