'use strict';

/** Class representing a Stack. */

class Stack {
  constructor() {
    this._storage = [];
  }
  /**
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    this._storage.push(value);
  }

  /**
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    return this._storage.pop();
  }

  /**
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    return this._storage[this._storage.length - 1];
  }
}

module.exports = { Stack };
