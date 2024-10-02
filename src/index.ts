// keyof

interface User{
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type USerKey = keyof User;
// keyof 키워드를 사용해서 키값들을 union 형태로 받을 수 있다.
// 'id' | 'name' | 'age' | 'gender'

const uk:USerKey = "id";
