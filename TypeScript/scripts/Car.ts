class Car {
    
    engine: string;
    constructor(engine: string){
        this.engine = engine;
    }

    start(){
        alert ('Engine started:' + this.engine);
    }

    stop(){
        alert ('Engine stop:' + this.engine);
    }
}

window.onload = function(){
    var car = new Car('v8');
    car.start();
    car.stop();
}