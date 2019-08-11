// step1
function *odd() {
  yield 1;
  yield 3;
  yield 5;
}

// step2 - infinity 함수로 refactoring
function *infinity(i = 0) {
  while(true) yield i++;
}

function *odd() {
  for (const a of infinity(1)) {
    if (a % 2 === 1) yield a;
  }
}

// step3 - limit 함수까지 더하면
function *limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}

function *odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2 ) yield a; 
  }
}

for (const a of odds(40)) {
  // log(a);
}