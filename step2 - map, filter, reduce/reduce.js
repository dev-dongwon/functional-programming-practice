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

// 명령형으로 구현해보자

let total = 0;
for (const p of products) {
  total += p.price;
}
log(total);

// reduce를 구현해보면

const old_reduce = (f, acc, iter) => {
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

// 근데 acc값이 생략된 경우에도 iter 첫번째 값이 acc 첫번째 값이 되게 하려면
const reduce = (f, acc, iter) => {
  // acc가 없이 (f. iter) 이렇게만 들어간 경우
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
}

log(
  reduce(
    (totalPrice, product) => totalPrice + product.price,
    0,
    products
  )
)