// 함수

// 나머지 매개변수의 type 작성법
// `...`를 사용하면 전달받은 매개변수를 배열로 나타냄
function add(...nums: number[]){
  return nums.reduce((result, num) => result + num, 0);
}

add(1,2,3);
