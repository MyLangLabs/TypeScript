// Required<T>
// 모든 프로퍼티를 필수로 변경해준다.

interface User{
  id: number;
  name: string;
  age?: number;
}

let admin: Required<User> = {
  id: 1,
  name: "Bob",
  age: 30
}