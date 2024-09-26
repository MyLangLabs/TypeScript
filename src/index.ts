// interface로 class 정의하기
// implements

interface Car{
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car{
  color = "red";
  wheels = 4;
  start(){
    console.log('go...');
  }
}