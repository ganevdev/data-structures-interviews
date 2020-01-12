'use strict';

/** Class representing a Linked List. */
class LinkedList {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._tail = 0;
    this._head = 0;
  }

  /**
   * Inserts a new value to the end of the linked list
   * @param {*} value - the value to insert
   */
  insert(value) {
    if (value) {
      this._storage[this._length] = value;
      this._tail = this._length;
      this._length++;
    }
  }

  /**
   * Removes the value at the end of the linked list
   * @return {*} - the removed value
   */
  removeTail() {
    if (this._length) {
      const removedValue = this._storage[this._tail];
      delete this._storage[this._tail];
      this._length--;
      this._tail--;
      return removedValue;
    }
  }

  /**
   * Searches the linked list and returns true if it contains the value passed
   * @param {*} value - the value to search for
   * @return {boolean} - true if value is found, otherwise false
   */
  contains(value) {
    if (!value) return false;
    let index = this._tail;
    while (index >= 0) {
      if (this._storage[index] === value) return true;
      index--;
    }
    return false;
  }

  /**
   * Checks if a node is the head of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the head, otherwise false
   */
  isHead() {}

  /**
   * Checks if a node is the tail of the linked list
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the tail, otherwise false
   */
  isTail() {}
}

module.exports = { LinkedList };
