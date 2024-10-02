// 추상 class => abstract

abstract class Car {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string){
    this.color = color;
  }
  start(){
    console.log("start");
  }
  abstract doSomething():void;
}

// const car = new Car("red"); // 추상 클래스는 new로 객체 생성 불가

class Bmw extends Car{
  constructor(color: string){
    super(color);
  }
  showName(){
    // console.log(super.name); // super -> this로 변경
    console.log(this.name);
    }
    doSomething(): void {
      alert(3);
    }
}

const z4 = new Bmw("black");
console.log(z4.name);