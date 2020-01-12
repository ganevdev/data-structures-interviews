const { Stack, Queue } = require('./index');

describe('Queue Class', () => {
  test('Queue() object ', () => {
    let test = new Queue();
    expect(test._storage).toEqual({});
  });

  test('.enqueue()', () => {
    let test = new Queue();

    test.enqueue('some 0');
    expect(test._storage).toEqual({ 0: 'some 0' });
    test.enqueue('some 1');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1' });
    test.enqueue('some 2');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1', 2: 'some 2' });
  });

  test('.dequeue()', () => {
    let test = new Queue();
    test.enqueue('some 0');
    test.enqueue('some 1');
    test.enqueue('some 2');

    let afterDequeue = '';

    afterDequeue = test.dequeue();
    expect(afterDequeue).toEqual('some 0');
    expect(test._storage).toEqual({ 1: 'some 1', 2: 'some 2' });

    afterDequeue = test.dequeue();
    expect(afterDequeue).toEqual('some 1');
    expect(test._storage).toEqual({ 2: 'some 2' });

    afterDequeue = test.dequeue();
    expect(afterDequeue).toEqual('some 2');
    expect(test._storage).toEqual({});
  });

  test('.peek()', () => {
    let test = new Queue();
    let afterPeek = '';

    test.enqueue('some 0');
    afterPeek = test.peek();
    expect(afterPeek).toEqual('some 0');
    expect(test._storage).toEqual({ 0: 'some 0' });

    test.enqueue('some 1');
    afterPeek = test.peek();
    expect(afterPeek).toEqual('some 0');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1' });

    test.enqueue('some 2');
    afterPeek = test.peek();
    expect(afterPeek).toEqual('some 0');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1', 2: 'some 2' });
  });
});

describe('Stack Class', () => {
  test('Stack() object ', () => {
    let test = new Stack();
    expect(test._storage).toEqual({});
  });

  test('.push()', () => {
    let test = new Stack();

    test.push('some 0');
    test.push('some 1');
    test.push('some 2');
    expect(test).toEqual({
      _storage: { 0: 'some 0', 1: 'some 1', 2: 'some 2' },
      _length: 3,
    });
  });

  test('.pop()', () => {
    let test = new Stack();

    expect(test.pop()).toBeUndefined();

    test.push('some 0');
    test.push('some 1');
    test.push('some 2');

    const afterPop = test.pop();
    expect(test).toEqual({
      _storage: { 0: 'some 0', 1: 'some 1' },
      _length: 2,
    });
    expect(afterPop).toEqual('some 2');
  });

  test('.peek()', () => {
    let test = new Stack();

    expect(test.peek()).toBeUndefined();

    test.push('some 0');
    test.push('some 1');

    const afterPeek = test.peek();
    expect(test).toEqual({
      _storage: { 0: 'some 0', 1: 'some 1' },
      _length: 2,
    });
    expect(afterPeek).toEqual('some 1');
  });
});
