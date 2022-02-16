function curry(fn, ...a) {
  return fn.length > a.length ? (...b) => curry(fn, ...a, ...b) : fn(...a)
}

function test (a, b, c) {
  return `${a}_${b}_${c}`
}

const join = curry(test);

console.log(join(1,2,3))
console.log(join(1,2)(3))
console.log(join(1)(2,3))
console.log(join(1)(2)(3))
console.log(join(1,2)(3,4))