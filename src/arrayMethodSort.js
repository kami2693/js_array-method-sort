'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Create a new variable for the comparison function
    const compareFn =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
          if (a === b) {
            return 0;
          }

          if (a === undefined) {
            return 1;
          }

          if (b === undefined) {
            return -1;
          }

          if (a === null) {
            return 1;
          }

          if (b === null) {
            return -1;
          }

          const aString = String(a);
          const bString = String(b);

          if (aString < bString) {
            return -1;
          }

          if (aString > bString) {
            return 1;
          }

          return 0;
        };

    // Bubble sort implementation
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFn(this[j], this[j + 1]) > 0) {
          // Swap elements
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
