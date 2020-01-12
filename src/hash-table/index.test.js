const { HashTable } = require('./index');

describe('HashTable Class', () => {
  test('HashTable() object', () => {
    let test = new HashTable();
    expect(test._storage).toEqual([]);
  });

  test('insert()', () => {
    let test = new HashTable();

    test.insert('1', 'some 1');
    expect(test._storage).toEqual([['1', 'some 1']]);
    test.insert('2', 'some 2');
    expect(test._storage).toEqual([
      ['1', 'some 1'],
      ['2', 'some 2'],
    ]);
    test.insert('3', 'some 3');
    expect(test._storage).toEqual([
      ['1', 'some 1'],
      ['2', 'some 2'],
      ['3', 'some 3'],
    ]);
  });

  test('remove()', () => {
    let test = new HashTable();

    test.insert('1', 'some 1');
    test.insert('2', 'some 2');
    test.insert('3', 'some 3');

    let afterRemove = test.remove('2');
    expect(afterRemove).toEqual('some 2');
    expect(test._storage).toEqual([
      ['1', 'some 1'],
      ['3', 'some 3'],
    ]);
  });

  test('retrieve()', () => {
    let test = new HashTable();

    test.insert('1', 'some 1');
    test.insert('2', 'some 2');
    test.insert('3', 'some 3');

    let afterRetrieve = '';

    afterRetrieve = test.retrieve('1');
    expect(afterRetrieve).toEqual('some 1');
    afterRetrieve = test.retrieve('2');
    expect(afterRetrieve).toEqual('some 2');
    afterRetrieve = test.retrieve('3');
    expect(afterRetrieve).toEqual('some 3');
  });
});
