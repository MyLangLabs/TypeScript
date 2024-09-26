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
