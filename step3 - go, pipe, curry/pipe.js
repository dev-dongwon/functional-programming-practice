const log = console.log;

// 합성 함수를 리턴한다
// pipe는 내부적으로 go 함수를 사용한다

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
const add = (a, b) => a + b;
const go = (...args) => reduce((a, f) => f(a), args);
// fs는 함수의 목록이다
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

// 합성 함수를 리턴한다는 게 무슨 뜻이냐면

go (
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  log
)

// 여기서 a => a + number 가 반복되는 구간을 하나의 합성 함수로 만든다는 소리
// 이렇게 하나의 f 라는 함수로 만들어서 함수를 리턴한다
const f = pipe(
  add,
  a => a + 1,
  a => a + 10,
  a => a + 100,
);

log(f(10, 1));