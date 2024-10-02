// Partial<T>
// 프로퍼티를 모두 optional로 변경해준다.
// 일부만 사용하는 것이 가능해진다.

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

let admin: Partial<User> = {
  id: 1,
  name: "Bob",
}
