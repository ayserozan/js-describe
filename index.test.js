const describe = require("./index");

it("Should get the generate descriptive statistics in an 4 length array", () => {
  const [count, mean, std, minVal, firstQuartile, median, thirdQuartile, max] =
    describe([1, 2, 3, 4]);
  expect(count).toBe(4);
  expect(mean).toBe(2.5);
  expect(std).toBeCloseTo(1.118);
  expect(minVal).toBe(1);
  expect(firstQuartile).toBe(1.5);
  expect(median).toBe(2.5);
  expect(thirdQuartile).toBe(3.5);
  expect(max).toBe(4);
});

it("Should get the generate descriptive statistics in an 4 length zero array", () => {
  const [count, mean, std, minVal, firstQuartile, median, thirdQuartile, max] =
    describe([0, 0, 0, 0]);
  expect(count).toBe(4);
  expect(mean).toBe(0);
  expect(std).toBeCloseTo(0);
  expect(minVal).toBe(0);
  expect(firstQuartile).toBe(0);
  expect(median).toBe(0);
  expect(thirdQuartile).toBe(0);
  expect(max).toBe(0);
});

it("Should get the generate descriptive statistics in a 1 array", () => {
  const [count, mean, std, minVal, firstQuartile, median, thirdQuartile, max] =
    describe([0]);
  expect(count).toBe(1);
  expect(mean).toBe(0);
  expect(std).toBe(NaN);
  expect(minVal).toBe(0);
  expect(firstQuartile).toBe(NaN);
  expect(median).toBe(0);
  expect(thirdQuartile).toBe(NaN);
  expect(max).toBe(0);
});

it("Should get the generate descriptive statistics in a 2 length array", () => {
  const [count, mean, std, minVal, firstQuartile, median, thirdQuartile, max] =
    describe([1, 6]);
  expect(count).toBe(2);
  expect(mean).toBe(3.5);
  expect(std).toBeCloseTo(2.5);
  expect(minVal).toBe(1);
  expect(firstQuartile).toBe(NaN);
  expect(median).toBe(3.5);
  expect(thirdQuartile).toBe(NaN);
  expect(max).toBe(6);
});

it("Should get the generate descriptive statistics in a 3 lenght array", () => {
  const [count, mean, std, minVal, firstQuartile, median, thirdQuartile, max] =
    describe([1, 2, 3]);
  expect(count).toBe(3);
  expect(mean).toBe(2);
  expect(std).toBeCloseTo(0.816);
  expect(minVal).toBe(1);
  expect(firstQuartile).toBe(NaN);
  expect(median).toBe(2);
  expect(thirdQuartile).toBe(NaN);
  expect(max).toBe(3);
});

it("Should get the generate descriptive statistics in an odd length array", () => {
  const [count, mean, std, minVal, firstQuartile, median, thirdQuartile, max] =
    describe([1, 2, 3, 4, 5]);
  expect(count).toBe(5);
  expect(mean).toBe(3);
  expect(std).toBeCloseTo(1.414);
  expect(minVal).toBe(1);
  expect(firstQuartile).toBe(2);
  expect(median).toBe(3);
  expect(thirdQuartile).toBe(4);
  expect(max).toBe(5);
});
