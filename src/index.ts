// interface로 class 정의하기
// implements

interface Car{
  color: string;
  wheels: number;
  start(): void;
}

// extends 키워드 사용
interface Benz extends Car{
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop(){
    console.log('stop');
  },
  color: 'black',
  wheels: 4,
  start(){
    console.log('go..')
  }
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