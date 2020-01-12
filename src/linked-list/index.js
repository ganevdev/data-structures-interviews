'use strict';

/** Class representing a Linked List. */
class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  /**
   * Inserts a new value to the end of the linked list
   * @param {*} value - the value to insert
   */
  insert(value) {
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }

  /**
   * Removes the value at the end of the linked list
   * @return {*} - the removed value
   */
  removeTail() {
    const removedNode = this.tail;
    let node = this.head;
    if (!node.next) return removedNode.value;
    while (node && node.next) {
      if (!node.next.next) {
        this.tail = node;
        this.tail.next = null;
      }
      node = node.next;
    }
    return removedNode.value;
  }

  /**
   * Searches the linked list and returns true if it contains the value passed
   * @param {*} value - the value to search for
   * @return {boolean} - true if value is found, otherwise false
   */
  contains() {}

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
