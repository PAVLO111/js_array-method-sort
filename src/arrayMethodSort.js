'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const input =
      compareFunction || ((a, b) => (String(a) > String(b) ? 1 : -1));

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const res = input(this[j], this[j + 1]);

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
