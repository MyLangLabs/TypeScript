// interface

// 문자열 리터럴 타입
type Score = 'A' | 'B' | 'C' | 'F';

// 프로퍼티 정의해서 객체 사용하고자 할 때는 interface 사용
interface User{
  name : string;
  age : number;
  gender? : string; // ?는 입력을 해도 되고 안해도되고 => optional
  readonly birthYear : number; // readonly는 읽기 전용 속성
  [grade:number] : Score; // 인덱스 시그니처
}

let user : User = {
  name : 'xx',
  age : 30,
  birthYear : 2000,
  1: 'C'
}

user.age=10;
user.gender = 'male';

console.log(user.age);
