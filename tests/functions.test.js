const functions = require('../src/functions.js');

const initDatabase = () => console.log('Database initialized');
const closeDatabase = () => console.log('Database Closed');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const nameCheck = () => console.log('Checking name.......');
describe('Checking names', () => {
  beforeEach(() => nameCheck());

  test('User is jeff', () => {
    const user = 'jeff';
    expect(user).toBe('jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe is used to look for specific values. primitive values
// to check for truthy values or falsy values - toBeTruthy or toBeFalsy
// toBeDefined or toBeUndefined are also there and matches defined and undefined
// toBeNull matches only null

test('Add function', () => {
  expect(functions.add(2, 2)).toBe(4);
  expect(functions.add(2, 3)).not.toBe(4);
});

test('Subtracts 2 - 2 to equal 0', () => {
  expect(functions.subtract(2, 2)).toBe(0);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be undefined', () => {
  expect(functions.isUndefined()).toBeUndefined();
});

test('CheckValue test', () => {
  expect(functions.checkValue(5)).toBeTruthy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(null)).toBeNull();
  expect(functions.checkValue(undefined)).toBeUndefined();
});

test('CreateUser should return object', () => {
  // expect(functions.createUser()).toBe({ firstName: 'Rick', lastName: 'Morty' }); compared values not have visual difference
  expect(functions.createUser()).toEqual({ firstName: 'Rick', lastName: 'Morty' });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + 1000).toBeGreaterThan(1600);
  expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load2).toBeLessThanOrEqual(1500);
});

// Regex
test('Regex: There is no I in team', () => {
  expect('team').not.toMatch(/I/);
  expect('teami').toMatch(/I/i);
});

// Arrays
test('Arrays: Admin should be in usernames', () => {
  usernames_1 = ['John', 'Karen', 'admin'];
  usernames_2 = ['John', 'Karen'];
  expect(usernames_1).toContain('admin');
  expect(usernames_2).not.toContain('admin');
});

// Fetch user - Working with async data

// Promise 
test('Promise: User fetched userId should be 1', () => {
  // vertify that certain number of assertions are called
  // when working with async data, enusre callback or promise if called
  // return statement is needed to ensure test does not complete before data arrives

  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.userId).toEqual(1);
  })
});

// Async await
test('Async Await: User fetched userId should be 1', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.userId).toEqual(1);
});
