const log = console.log;

const map = (f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

const filter = (f, iter) => {
  const res = [];
  for(const a of iter) {
    if(f(a)) res.push(a);
  }
  return res;
}

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

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


// 가격을 뽑아보자
log(
  map(p => p.price, products)
)

// 20000만원 이상의 가격을 뽑아보자 (map + filter)
log(
  map(p => p.price,
    filter(p => p.price >= 20000, products))
)

// 이렇게 뽑은 가격을 더해보자
const add = (a, b) => a + b;

log(
  reduce(
    add,
    map(p => p.price,
      filter(p => p.price >= 20000, products))
  )
)