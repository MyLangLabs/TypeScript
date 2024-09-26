// interface
// optional, readonly

// 프로퍼티 정의해서 객체 사용하고자 할 때는 interface 사용
interface User{
  name : string;
  age : number;
  gender? : string; // ?는 입력을 해도 되고 안해도된다 => optional
  readonly birthYear : number; // readonly는 읽기 전용 속성
}

let user : User = {
  name : 'xx',
  age : 30,
  birthYear : 2000
}

user.age=10;
user.gender = 'male';

console.log(user.age);

