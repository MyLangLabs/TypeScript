// Union Types `|`

interface Car{
  name: "car";
  color: string;
  start(): void;
}

interface Mobile{
  name: "mobile";
  color: string;
  call(): void;
}

// 동일한 속성의 타입을 다르게해서 구분할 수 있는 것 => 식별 가능한 union 타입
function getGift(gift: Car | Mobile){
  console.log(gift.color);
  if(gift.name === "car"){
    gift.start();
  }else{
    gift.call();
  }
}