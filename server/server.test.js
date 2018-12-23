const axios = require('axios');

jest.mock(axios);

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});