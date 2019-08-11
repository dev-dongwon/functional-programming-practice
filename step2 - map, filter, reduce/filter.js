const log = console.log;

const products = [{
    "name": "반팔티",
    "price": 10000
  },
  {
    "name": "긴팔티",
    "price": 15000
  },
  {
    "name": "바지",
    "price": 20000
  },
  {
    "name": "후드",
    "price": 50000
  },
  {
    "name": "양말",
    "price": 5000
  }
]

// 20000원 이하인 상품만 고르라고 했을 때 보통 우린
let under_20000 = [];
for (const a of products) {
  if (a.price < 20000) under_20000.push(a);
}
log(under_20000);

// 다형성을 살려서 filter를 위임해보면

const filter = (f, iter) => {
  const res = [];
  for(const a of iter) {
    if(f(a)) res.push(a);
  }
  return res;
}

log(filter(p => p.price < 20000, products))