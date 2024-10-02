// Omit<T,K>

// T 타입에서 K 프로퍼티만 생략해서 사용

interface User{
  id: number;
  name: string;
  age: number;
  gender: "M"|"W";
}

const admin: Omit<User, "age"|"gender"> = {
  id: 0,
  name: "Bob",
}