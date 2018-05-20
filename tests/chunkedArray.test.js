const chunkedArray = require('../src/chunkedArray');

test('ChunkedArray function exists', () => {
  expect(chunkedArray).toBeDefined();
});

test('ChunkedArray to equals', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const len = 2;
  const chunkedArr = chunkedArray(arr, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6]]);
});

test('ChunkedArray to equals', () => {
  const arr = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkedArray(arr, len);

  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
