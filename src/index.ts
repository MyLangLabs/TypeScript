// Record<K,T> // K=key, T=type

const score: Record<'1'|'2'|'3'|'4', "A"|"B"|"C"|"D"> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
}

interface User{
  id: number;
  name: string;
  age: number;
}

function isValid(user:User){
  const result: Record<keyof User, boolean> ={
    id: user.id>0,
    name: user.name !=='',
    age: user.age > 0,
  };
  return result;
}