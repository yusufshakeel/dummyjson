import { getDummyJson } from '../../src';

describe('Testing', () => {
  test('Should return message', () => {
    expect(getDummyJson()).toStrictEqual({ message: 'Hello, World!' });
  });
});