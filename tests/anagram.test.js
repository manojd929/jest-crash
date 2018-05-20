const isAnagram = require('../src/anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
  expect(isAnagram).toBeDefined();
});

test('isAnagram test of "cinema" and "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('isAnagram test of "dormitory " and "dirty room"', () => {
  expect(isAnagram('dormitory ', 'dirty room')).toBeTruthy();
});

test('isAnagram test of "Aloha" and "Hello"', () => {
  expect(isAnagram('Aloha', 'Hello')).toBeFalsy();
});
