// Pick<T,K>

// T 타입에서 K 프로퍼티만 골라서 사용

interface User{
  id: number;
  name: string;
  age: number;
  gender: "M"|"W";
}

const admin: Pick<User, "id"|"name"> = {
  id: 0,
  name: "Bob",
}