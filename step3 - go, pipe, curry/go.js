const log = console.log;

const reduce = (f, acc, iter) => {
  // acc가 없이 (f, iter) 이렇게만 들어간 경우
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

// ...args로 하면 args는 배열이 반환된다
const go = (...args) => reduce((acc, fn) => fn(acc), args);

  go (
    0,
    a => a + 1,
    a => a + 10,
    a => a + 100,
    log
  )