function flat(arr, depth = 1) {
  if(depth === 0) return arr
  return arr.reduce((pre, val) => pre.concat(Array.isArray(val) ? flat(val, depth - 1) : val), [])
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr)); // [1, 2, 3, [4]]
console.log(flat(arr, 1)); // [1, 2, 3, [4]]
console.log(flat(arr, 2)); // [1, 2, 3, 4]