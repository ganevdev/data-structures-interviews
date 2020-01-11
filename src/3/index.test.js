const { Stack } = require('./index');

test('Stack tests', () => {
  let test = new Stack();

  expect(test._storage).toEqual([]);

  test.push('some 1');
  test.push('some 2');
  test.push('some 3');
  expect(test._storage).toEqual(['some 1', 'some 2', 'some 3']);

  const afterPop = test.pop();
  expect(test._storage).toEqual(['some 1', 'some 2']);
  expect(afterPop).toEqual('some 3');

  const afterPeek = test.peek();
  expect(test._storage).toEqual(['some 1', 'some 2']);
  expect(afterPeek).toEqual('some 2');
});
