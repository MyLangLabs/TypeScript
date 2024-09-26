// src/index.ts

// number 파라미터를 받는 함수
function add(num1:number, num2:number){ // 타입 정의
  console.log(num1 + num2);
}

add(1,2);

// 다른 타입 사용시 에러 발생
// add("hello", "world"); 


// 숫자형 배열 파라미터 함수
function showItems(arr: number[]){
  arr.forEach((item)=>{
    console.log(item);
  });
}

showItems([1, 2, 3]);
