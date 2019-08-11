// 함수를 인자로 받아 실행하는 함수
const log = console.log;

const apply = f => f(1);
const add2 = (number) => number + 2;
log(apply(add2)) // 3


const times = (f, n) => {
  let i = -1;
  while(++i < n) f(i);
}
times(log, 3); // 0, 1, 2


const addMaker = a => b => a + b;
const add10 = addMaker(10);
log(add10); // b => a + b;
log(add10(10)); // 20


// 이터러블 프로토콜
const arr = [1,2,3];
log(arr[Symbol.iterator]); // ƒ values() { [native code] }
log(arr[Symbol.iterator]()); // Array Iterator {}

let iter = arr[Symbol.iterator]();
log(iter.next()); // {value: 1, done: false}
log(iter.next()); // {value: 2, done: false}
log(iter.next()); // {value: 3, done: false}
log(iter.next()); // {value: undefined, done: true}


// 제너레이터 - 이터레이터이자 이터러블을 생성하는 함수
function *gen() {
  yield 1;
  if (false) yield 2;
  yield 3;
}

iter = gen();
log(iter); // gen {<suspended>}
log(iter.next()); // {value: 1, done: false}
log(iter.next()); // {value: 3, done: false}
log(iter.next()); // {value: undefined, done: true}

// 전개연산자 - 이것도 역시 이터러블, 이터레이터 프로토콜을 따른다
const a = [1, 2];
log(...a);