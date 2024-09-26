// Intersection Types (교차 타입)
// 여러 타입을 합쳐서 사용함 (&)
// 장난감 + 자동차 = 장난감 자동차
// 필요한 모든 기능을 가진 하나의 타입을 만들어준다.

interface Car{
  name: string;
  start(): void;
}

interface Toy{
  name: string;
  color: string;
  price: number;
}

// 모든 속성을 전부 기입해야 함.
const toyCar: Toy&Car = {
  name: "타요",
  start(){},
  color: "blue",
  price: 1000,
}