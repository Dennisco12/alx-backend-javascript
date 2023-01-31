export default function setFromArray (array) {
  const newSet = new Set();
  for (let i = 0; i < array.length; i++) {
    newSet.add(array[i]);
  }
  return newSet;
}
