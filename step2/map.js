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

// 가격만 뽑아봐라라고 했을 때 보통 이렇게 한다
let prices = [];
for (const p of products) {
  prices.push(p.price);
}
log(prices);

// 위에선 p.price로 직접 값을 지정했지? 다형성을 높이기 위해 어떤 값을 뽑아낼지 위임해보자
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

log(map(p => p.price, products));

// 이게 왜 다형성이 높은 거냐면 유사 배열도 for...of 를 통해 iterable protocol을 만들어주기 때문이다

// 이건 당연히 되겠지, array 가 이터러블 프로톨을 따르니까.
log([1,2,3].map(val => val + 10)); // 11, 12, 13

// 이건 어떨까?
// 이건 Uncaught TypeError: document.querySelector(...).map is not a function 오류가 난다. 프로토타입에 map이 없잖아.
// 프로토타입에서 map을 쓸 수 없다
// log(document.querySelectorAll('*').map(el => el.nodeName));

// 근데 이건 된다. 획득한 DOM이 유사 배열로서 이터러블 프로토콜을 따르고 있기 때문.
log(map(el => el.nodeName, document.querySelectorAll('*')));

// generator 함수 값도 map을 활용할 수 있다. 이터러블이니까.
function *gen() {
  yield 2;
  yield 3;
  yield 4;
}

log(map(val => val % 2 === 1, gen())) // false, true, false


// 우리가 아는 js의 map도 이렇게 활용가능하다
const m = new Map();
m.set('a', 10);
m.set('b', 20);

const mapIter = m[Symbol.iterator]();

log(new Map(map(([k, v]) => [k, 2 * v], m))); // Map(2) {"a" => 20, "b" => 40}