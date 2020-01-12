const { Queue } = require('./index');

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
