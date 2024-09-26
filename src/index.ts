// implements

interface Car{
  color: string;
  wheels: number;
  start(): void;
}

interface Toy{
  name: string;
}

interface ToyCar extends Car, Toy{
  price: number;
}