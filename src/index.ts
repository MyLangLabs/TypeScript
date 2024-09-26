// 함수

// this
interface User{
  name: string;
}

const Sam: User = {name:'Sam'}
const Mike: User = {name:'Mike'}

// 매개변수가 없을 때 => 매개변수 자리에 this의 타입 지정
function showName(this: User){
  console.log(this.name);
}

// 매개변수 있을 때 => 맨 앞에 this의 타입 지정
function showName2(this: User, age:number, gender: 'm'|'f'){
  console.log(this.name, age, gender);
}

const a= showName.bind(Sam);
a();

const b = showName2.bind(Mike);
b(30, 'm');