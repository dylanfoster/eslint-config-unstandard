"use strict";

module.exports = {
  extends: "eslint-config-unstandard/base",
  env: {
    mocha: true
  },
  rules: {
    "no-magic-numbers": 0,
    "no-unused-vars": 0,
    "object-shorthand": 0,
    "prefer-arrow-callback": 0
  }
}
