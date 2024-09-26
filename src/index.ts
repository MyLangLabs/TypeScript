// Literal Types

// const(변하지 않는 값), let(변할 수 있는 값) 선언
// 정해진 string 값을 가진 것 => 문자열 리터럴 타입
const userName1 = "Bob"; 
let userName2 = "Tom";

// 문자형 리터럴 타입
type Job = "police" | "developer" | "teacher";

interface User{
  name: string;
  job: Job;
}

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3; // 숫자형 리터럴 타입
}

const user:User = {
  name: "Bob",
  job: "developer"
}