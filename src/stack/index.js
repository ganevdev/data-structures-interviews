'use strict';

/** Class representing a Stack. */
class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }
  /**
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    if (value) {
      this._storage[this._length] = value;
      this._length = this._length + 1;
    }
  }

  /**
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    if (this._length > 0) {
      const last = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length = this._length - 1;
      return last;
    } else {
      return undefined;
    }
  }

  /**
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    if (this._length > 0) {
      return this._storage[this._length - 1];
    } else {
      return undefined;
    }
  }
}

module.exports = { Stack };
