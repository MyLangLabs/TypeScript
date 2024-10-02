// class

// 접근 제한자 - public, private, protected

class Car {
  public name: string = "car";
  color: string;
  constructor(color: string){
    this.color = color;
  }
  start(){
    console.log("start");
  }
}

class Bmw extends Car{
  constructor(color: string){
    super(color);
  }
  showName(){
    // console.log(super.name); // super -> this로 변경
    console.log(this.name);
    }
}

const z4 = new Bmw("black");
console.log(z4);