// 함수

function hello(name?: string){ 
  // 함수 파라미터로 optional 가능 => 선택적 매개변수
  return `Hello, ${name || "world"}`;
}

// hello와 모습이 같은 함수
function hello2(name = `world`){
  return `Hello ${name}`;
}
