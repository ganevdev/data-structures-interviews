const { LinkedList } = require('./index');

describe('LinkedList Class', () => {
  test('LinkedList() object', () => {
    let test = new LinkedList();
    expect(test._storage).toEqual({});
  });

  test('insert()', () => {
    let test = new LinkedList();

    test.insert('some 0');
    expect(test._storage).toEqual({ 0: 'some 0' });
    expect(test._length).toEqual(1);
    expect(test._tail).toEqual(0);
    expect(test._head).toEqual(0);

    test.insert('some 1');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1' });
    expect(test._length).toEqual(2);
    expect(test._tail).toEqual(1);
    expect(test._head).toEqual(0);

    test.insert('some 2');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1', 2: 'some 2' });
    expect(test._length).toEqual(3);
    expect(test._tail).toEqual(2);
    expect(test._head).toEqual(0);
  });

  test('removeTail()', () => {
    let test = new LinkedList();

    test.insert('some 0');
    test.insert('some 1');
    test.insert('some 2');

    let afterRemove = '';

    afterRemove = test.removeTail();
    expect(afterRemove).toEqual('some 2');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1' });
    expect(test._length).toEqual(2);
    expect(test._tail).toEqual(1);
    expect(test._head).toEqual(0);

    afterRemove = test.removeTail();
    expect(afterRemove).toEqual('some 1');
    expect(test._storage).toEqual({ 0: 'some 0' });
    expect(test._length).toEqual(1);
    expect(test._tail).toEqual(0);
    expect(test._head).toEqual(0);

    test.insert('some 1');
    expect(test._storage).toEqual({ 0: 'some 0', 1: 'some 1' });
    expect(test._length).toEqual(2);
    expect(test._tail).toEqual(1);
    expect(test._head).toEqual(0);

    afterRemove = test.removeTail();
    expect(afterRemove).toEqual('some 1');
    expect(test._storage).toEqual({ 0: 'some 0' });
    expect(test._length).toEqual(1);
    expect(test._tail).toEqual(0);
    expect(test._head).toEqual(0);
  });

  test('contains()', () => {
    let test = new LinkedList();
    test.insert('some 0');
    test.insert('some 1');
    test.insert('some 2');

    let afterContains = false;

    afterContains = test.contains('some 0');
    expect(afterContains).toEqual(true);
    afterContains = test.contains('some 1');
    expect(afterContains).toEqual(true);
    afterContains = test.contains('some 2');
    expect(afterContains).toEqual(true);

    afterContains = test.contains('some 3');
    expect(afterContains).toEqual(false);
    afterContains = test.contains('some 4');
    expect(afterContains).toEqual(false);
  });

  test('isHead()', () => {
    let test = new LinkedList();
    test.insert('some 0');
    test.insert('some 1');
    test.insert('some 2');
  });

  test('isTail()', () => {
    let test = new LinkedList();
    test.insert('some 0');
    test.insert('some 1');
    test.insert('some 2');
  });
});
