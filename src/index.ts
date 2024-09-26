// 함수

// 선택적 매개변수와 필수 매개변수를 바꾸면 안된다.
function hello(name: string, age?:number):string{ 
  if (age !== undefined)
    return `Hello, ${name}. You are ${age}.`;
  else
    return `Hello, ${name}`;
}

// optional이 앞에 오게 하고 싶으면 undefined를 추가한다.
function hello2(age: number|undefined, name: string):string{ 
  if (age !== undefined)
    return `Hello, ${name}. You are ${age}.`;
  else
    return `Hello, ${name}`;
}

console.log(hello('Sam'));
console.log(hello("Sam", 30));

// undefined를 명시적으로 전달해줘야한다.
console.log(hello2(undefined, "sam"));
