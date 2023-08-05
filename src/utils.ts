export function range(firstVal: number, endVal: number) {
  const arr = [];
  for (let k = firstVal; k <= endVal; k++) {
    arr.push(k);
  }
  return arr;
}
