function curry(fn, placeholder = curry.placeholder) {
  return function curryDeep(...args) {
    return args.length >= fn.length && !args.slice(0, fn.length).includes(placeholder) ? fn.apply(args, args) : (...rest) => curryDeep(...combineArgs(args, rest))
  }

  function combineArgs(preArgs, curArgs) {
    if(preArgs.length === 0) return curArgs;
    if(curArgs.length === 0) return preArgs;
    return preArgs.map(v => v === placeholder && curArgs.length > 0 ? curArgs.shift() : v).concat(curArgs)
  }
}

const _ = (curry.placeholder = Symbol());

function test(a, b, c) {
  return `${a}_${b}_${c}`;
}

const curriedJoin = curry(test);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1)); // '1_2_3'
