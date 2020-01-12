'use strict';

/** Class representing a Queue.
 * @constructor
 */
class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  /**
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    const lastIndex = this._length + this._headIndex;
    this._storage[lastIndex] = value;
    this._length = this._length + 1;
  }

  /**
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    if (this._length) {
      const firstValue = this._storage[this._headIndex];
      delete this._storage[this._headIndex];
      this._length = this._length - 1;
      this._headIndex = this._headIndex + 1;
      return firstValue;
    } else {
      return undefined;
    }
  }

  /**
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    if (this._length) {
      const firstValue = this._storage[this._headIndex];
      return firstValue;
    } else {
      return undefined;
    }
  }
}

module.exports = { Queue };
