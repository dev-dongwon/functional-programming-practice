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