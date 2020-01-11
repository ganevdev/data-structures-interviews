const { Stack } = require('./index');

test('Stack Class tests', () => {
  let test = new Stack();

  expect(test._storage).toEqual({});

  test.push('some 0');
  test.push('some 1');
  test.push('some 2');
  expect(test).toEqual({
    _storage: { 0: 'some 0', 1: 'some 1', 2: 'some 2' },
    _length: 3,
  });

  const afterPop = test.pop();
  expect(test).toEqual({
    _storage: { 0: 'some 0', 1: 'some 1' },
    _length: 2,
  });
  expect(afterPop).toEqual('some 2');

  const afterPeek = test.peek();
  expect(test).toEqual({
    _storage: { 0: 'some 0', 1: 'some 1' },
    _length: 2,
  });
  expect(afterPeek).toEqual('some 1');
});
