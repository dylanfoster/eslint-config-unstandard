"use strict";

module.exports = {
  env: {
    node: true
  },
  rules: {
    "callback-return": 2,
    "global-require": 2,
    "handle-callback-err": 2,
    "no-mixed-requires": [1, { grouping: true }],
    "no-new-require": 2,
    "no-path-concat": 2
  }
}
