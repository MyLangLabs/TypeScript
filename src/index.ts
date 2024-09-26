// 함수 오버로드
// 전달받은 매개변수의 갯수나 타입에 따라 다르게 동작하게 함


interface User{
  name: string;
  age: number;
}

// 함수 오버로드 사용
function join(name: string, age: number): User;
function join(name: string, age: string): User;
function join(name: string, age: number|string):User|string{
  if(typeof age === "number"){
    return{
      name,
      age,
    };
  } else{
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User = join("Sam", 30);
const jane: User = join("Jane", "30");