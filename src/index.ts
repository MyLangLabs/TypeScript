// class
// static

class Car {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name){
    this.color = color;
    this.name = name;
  }
  start(){
    console.log("start");
    console.log(this.name);
    console.log(Car.wheels);
  }
}

class Bmw extends Car{
  constructor(color: string, name){
    super(color, name);
  }
  showName(){
    // console.log(super.name); // super -> this로 변경
    console.log(this.name);
    }
}

const z4 = new Bmw("black", "zzzz4");
console.log(z4.name);