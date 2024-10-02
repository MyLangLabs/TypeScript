// Readonly<T>
// 모든 프로퍼티를 읽기전용으로 변경

interface User{
  id: number;
  name: string;
  age?: number;
}

let admin: Readonly<User> = {
  id: 1,
  name: "Bob",
}

// admin.id = 4; // 에러 발생. 할당만 가능하고 수정 불가.