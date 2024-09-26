// interface

interface Add{
  (num1:number, num2:number): number; // (파라미터) : (return)
}

const add : Add = function(x,y){
  return x+y;
}

add(10,20);

interface IsAdult{
  (age: number): boolean;
}

const a : IsAdult = (age) => {
  return age > 19;
}

a(33);