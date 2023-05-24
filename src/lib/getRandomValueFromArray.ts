import { getRandomInteger } from "./getRandomInteger";

export function getRandomValueFromArray(array: any[]) {
  const valueIndex = getRandomInteger(0, array.length - 1);
  return array[valueIndex];
}
