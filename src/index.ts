// Generic
// class, function, interface를 다양한 타입으로 재사용할 수 있다.
// 선언할때는 타입 파라미터만 작성 -> 생성 시점에 사용할 타입 결정

function getSize<T>(arr: T[]):number{
  return arr.length;
}

const arr1 = [1,2,3];
getSize<number|string>(arr1); 
// 특정 타입으로 강제하고 싶을 때 <>안에 값 넣어서 사용

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); // 3

const arr3 = [false, true, false];
getSize<boolean>(arr3); // 3

const arr4 = [{}, {}, {name: "Tim"}];
getSize(arr4); // 3