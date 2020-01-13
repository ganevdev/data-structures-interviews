const { HashTable } = require('./index');

describe('HashTable Class', () => {
  test('HashTable() object', () => {
    let test = new HashTable();
    expect(test._storage).toEqual([]);
  });

  test('insert()', () => {
    let test = new HashTable(25);

    test.insert('a', 'some 1');
    test.insert('b', 'some 2');
    test.insert('c', 'some 3');

    expect(test).toBeDefined();
  });

  test('remove()', () => {
    let test = new HashTable();

    test.insert('a', 'some 1');
    test.insert('b', 'some 2');
    test.insert('c', 'some 3');
  });

  test('retrieve()', () => {
    let test = new HashTable();

    test.insert('a', 'some 1');
    test.insert('b', 'some 2');
    test.insert('c', 'some 3');

    let afterRetrieve = '';
    afterRetrieve = test.retrieve('a');
    expect(afterRetrieve).toEqual('some 1');
    afterRetrieve = test.retrieve('b');
    expect(afterRetrieve).toEqual('some 2');
    afterRetrieve = test.retrieve('c');
    expect(afterRetrieve).toEqual('some 3');

    afterRetrieve = test.retrieve('non ex');
    expect(afterRetrieve).toBeUndefined();
  });
});
