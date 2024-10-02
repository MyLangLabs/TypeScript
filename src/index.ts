// Generic

interface Mobile<T> {
  name: String;
  price: number;
  option: T; // 값 미정
}

// const m1: Mobile<object> ={
const m1: Mobile<{color: string; coupon: boolean}> = {
  name: "s21",
  price: 1000,
  option:{
    color: "red",
    coupon: false,
  },
}

const m2: Mobile<string> ={
  name: "s20",
  price: 900,
  option: "good",
};