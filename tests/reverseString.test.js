const reverseString = require('../src/reverseString');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('Reverse String', () => {
  expect(reverseString('HELLO')).toEqual('OLLEH');
});
