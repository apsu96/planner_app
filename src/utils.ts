import { Emotions, TaskCategory } from "./Store";

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

export function compareEmotions(data: number[]) {
  let finalData: Emotions[] = [];
  let bigValue: number = 0;
  const emotions = Object.values(Emotions);
  data.map((value, index) => {
    if (value > 0 && value > bigValue) {
      finalData = [emotions[index]];
      bigValue = value;
    } else if (value !== 0 && value === bigValue) {
      finalData.push(emotions[index]);
    }
  });
  if (finalData.length === 0) {
    return undefined;
  } else {
    return finalData.join(", ");
  }
}

export function compareTaskCategory(data: number[]) {
  const categories = Object.values(TaskCategory);
  if (data[0] === 0 && data[1] === 0) {
    return undefined;
  } else if (data[0] === data[1]) {
    return "both";
  } else {
    return data[0] > data[1] ? categories[0] : categories[1];
  }
}
