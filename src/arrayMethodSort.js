'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const res = compareFunction(this[j], this[j + 1]);

        if (res > 0) {
          const buf = this[j];

          this[j] = this[j + 1];

          this[j + 1] = buf;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
