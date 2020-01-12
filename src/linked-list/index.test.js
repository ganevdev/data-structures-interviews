const { LinkedList } = require('./index');

describe('LinkedList Class', () => {
  test('LinkedList() object', () => {
    let test = new LinkedList(1);
    expect(test.head).toEqual({ value: 1, next: null });
    expect(test.tail).toEqual({ value: 1, next: null });
  });

  test('insert()', () => {
    let test = new LinkedList(1);

    test.insert(2);
    expect(test.head).toEqual({ value: 1, next: { value: 2, next: null } });
    expect(test.tail).toEqual({ value: 2, next: null });

    test.insert(3);
    expect(test.head).toEqual({
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    });
    expect(test.tail).toEqual({ value: 3, next: null });
  });

  test('removeTail()', () => {
    let test = new LinkedList(1);

    test.insert(2);
    test.insert(3);

    let afterRemoveTail = '';

    afterRemoveTail = test.removeTail();
    expect(afterRemoveTail).toEqual(3);
    expect(test.head).toEqual({ value: 1, next: { value: 2, next: null } });
    expect(test.tail).toEqual({ value: 2, next: null });

    afterRemoveTail = test.removeTail();
    expect(afterRemoveTail).toEqual(2);
    expect(test.head).toEqual({ value: 1, next: null });
    expect(test.tail).toEqual({ value: 1, next: null });

    test.insert(2);
    test.insert(3);

    afterRemoveTail = test.removeTail();
    expect(afterRemoveTail).toEqual(3);
    expect(test.head).toEqual({ value: 1, next: { value: 2, next: null } });
    expect(test.tail).toEqual({ value: 2, next: null });
  });

  test('contains()', () => {
    let test = new LinkedList(1);

    test.insert(2);
    test.insert(3);

    let afterContains = false;

    afterContains = test.contains(1);
    expect(afterContains).toEqual(true);
    afterContains = test.contains(2);
    expect(afterContains).toEqual(true);
    afterContains = test.contains(3);
    expect(afterContains).toEqual(true);

    afterContains = test.contains();
    expect(afterContains).toEqual(false);
    afterContains = test.contains(4);
    expect(afterContains).toEqual(false);
    afterContains = test.contains(5);
    expect(afterContains).toEqual(false);
    afterContains = test.contains(6);
    expect(afterContains).toEqual(false);
  });
});
