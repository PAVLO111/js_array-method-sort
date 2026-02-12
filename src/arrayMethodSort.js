'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const input =
      compareFunction ||
      ((a, b) => {
        if (String(a) === String(b)) {
          return 0;
        } else {
          return String(a) > String(b) ? 1 : -1;
        }
      });

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

Array.prototype.sort = function (compareFunction) {
  return [].__proto__.sort2.call(this, compareFunction);
};

module.exports = applyCustomSort;
