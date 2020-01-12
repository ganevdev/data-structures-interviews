const { HashTable } = require('./index');

describe('HashTable Class', () => {
  test('HashTable() object', () => {
    let test = new HashTable();
    expect(test._storage).toEqual([]);
  });

  test('insert()', () => {
    let test = new HashTable();

    test.insert('1', 'some 1');
    test.insert('2', 'some 2');
    test.insert('3', 'some 3');
  });

  test('remove()', () => {
    let test = new HashTable();

    test.insert('1', 'some 1');
    test.insert('2', 'some 2');
    test.insert('3', 'some 3');
  });

  test('retrieve()', () => {
    let test = new HashTable();

    test.insert('1', 'some 1');
    test.insert('2', 'some 2');
    test.insert('3', 'some 3');
  });
});
