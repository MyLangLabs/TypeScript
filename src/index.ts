// Exclude<T1, T2>

// T1에서 T2를 제외하고 사용
// Omit은 프로퍼티를 제거, Exclude는 타입을 제거

type T1 = string|number;
type T2 = Exclude<T1,number>;