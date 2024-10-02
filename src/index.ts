// src/index.ts
class Car {
  color: string; // ts에서 class를 사용하려면 멤버변수 미리 선언
  constructor(color: string){
    this.color = color;
  }
  start(){
    console.log("start");
  }
}

const bmw = new Car("red");