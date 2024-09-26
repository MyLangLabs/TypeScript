// interface로 class 정의하기
// implements

interface Car{
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car{
  color;
  wheels = 4;
  constructor(c:string){ // 생성자
    this.color = c;
  }
  start(){
    console.log('go...');
  }
}

const b = new Bmw('green');