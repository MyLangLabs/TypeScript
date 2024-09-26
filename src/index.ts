// string 타입
let car:string = 'bmw';

// 배열의 2가지 타입
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

// 튜플 (Tuple)
let b:[string, number];
let b2:[string, number, boolean]; // n개 가능

// void, never
function sayHello():void{
  console.log('hello');
}

function showError():never{
  throw new Error();
}

function infLoop():never{
  while(true){
    // do something
  }
}

// enum
enum Os{
  Window, // Window=0; 자동으로 값이 할당된다.
  Ios, // Ios=1;
  Android // Android=2;
}

console.log(Os['Window']);
console.log(Os[0]);

enum Os2{ 
  Window='win',
  Ios='ios',
  Android='and'
}

console.log(Os2['Window']); // 숫자 값이 아니면 단방향 매핑
