export function range(firstVal: number, endVal: number) {
  const arr = [];
  for (let k = firstVal; k <= endVal; k++) {
    arr.push(k);
  }
  return arr;
}

export function timeRange(firstVal: number, endVal: number) {
  const arr = [];
  for (let k = firstVal; k <= endVal; k++) {
    let val = k.toString();
    if (k < 10) {
      val = "0" + k;
    }
    arr.push(val);
  }
  return arr;
}
