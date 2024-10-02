// class
// readonly

class Car {
  readonly name: string = "car";
  color: string;
  constructor(color: string, name){
    this.color = color;
    this.name = name;
  }
  start(){
    console.log("start");
    console.log(this.name);
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
console.log(z4);