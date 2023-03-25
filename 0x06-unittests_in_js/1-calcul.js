function calculateNumber(type, a, b) {
  const rounda = Math.round(a);
  const roundb = Math.round(b);
  if (type === 'SUM') {
    return rounda + roundb;
  } else if (type === 'SUBTRACT') {
    return rounda - roundb;
  } else if (type === 'DIVIDE') {
    if (roundb === 0) {
      return 'Error';
    } else {
      return rounda / roundb;
    }
  }
}

module.exports = calculateNumber;
