const log = console.log;

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  const res = [];
  for(const a of iter) {
    if(f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  // acc가 없이 (f, iter) 이렇게만 들어간 경우
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const go = (...args) => reduce((acc, fn) => fn(acc), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
