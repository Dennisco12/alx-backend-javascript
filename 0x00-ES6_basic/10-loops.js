export default function appendToEachArrayValue(array, appendString) {
  for (var idx of array) {
    const value = appendString + idx;
    idx = value;
  }

  return array;
}
