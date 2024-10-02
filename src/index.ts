// NonNullable<Type>
// Null과 undefind를 제외한 타입 생성

type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>;