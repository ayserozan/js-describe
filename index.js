const describe = (array) => {
  const countVal = array.length;
  const meanVal = mean(array);
  const stdVal = std(array);
  const minVal = Math.min(...array);
  const fisrtQuantileVal = firstQuantile(array);
  const medianVal = median(array);
  const thirdQuantileVal = thirdQuantile(array);
  const maxVal = Math.max(...array);
  console.log(`
count  ${countVal}
mean   ${meanVal}
std    ${stdVal}
min    ${minVal}
25%    ${fisrtQuantileVal}
50%    ${medianVal}
75%    ${thirdQuantileVal}
max    ${maxVal}`);
  return [
    countVal,
    meanVal,
    stdVal,
    minVal,
    fisrtQuantileVal,
    medianVal,
    thirdQuantileVal,
    maxVal,
  ];
};

function cumsum(array) {
  if (array.length === 0) throw new Error("No inputs");
  const cumSum = array.reduce((a, b) => a + b, 0);
  return cumSum;
}

function mean(array) {
  if (array.length === 0) throw new Error("No inputs");
  const mean = cumsum(array) / array.length || 0;
  return mean;
}

function std(array) {
  if (array.length === 0) throw new Error("No inputs");
  if (array.length > 1) {
    return Math.sqrt(
      array.map((x) => (x - mean(array)) ** 2).reduce((a, b) => a + b, 0) /
        array.length
    );
  } else {
    return NaN;
  }
}

function median(array) {
  if (array.length === 0) throw new Error("No inputs");

  array.sort(function (a, b) {
    return a - b;
  });

  if (array.length % 2) return array[Math.floor(array.length / 2)];
  return (
    (array[Math.floor(array.length / 2) - 1] +
      array[Math.floor(array.length / 2)]) /
    2.0
  );
}

function firstQuantile(array) {
  if (array.length === 0) throw new Error("No inputs");
  if (array.length > 3) {
    array.sort(function (a, b) {
      return a - b;
    });
    index = array.length / 4;
    if (Math.floor(index) == index) {
      return (array[index - 1] + array[index]) / 2;
    } else {
      return array[Math.floor(index)];
    }
  } else return NaN;
}

function thirdQuantile(array) {
  if (array.length === 0) throw new Error("No inputs");
  if (array.length > 3) {
    array.sort(function (a, b) {
      return a - b;
    });
    index = (array.length * 3) / 4;
    if (Math.floor(index) == index) {
      return (array[index - 1] + array[index]) / 2;
    } else {
      return array[Math.floor(index)];
    }
  } else return NaN;
}

module.exports = describe;
