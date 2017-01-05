"use strict";

module.exports = {
  extends: "eslint-config-unstandard/base",
  env: {
    mocha: true
  },
  rules: {
    "camelcase": 0,
    "consistent-return": 0,
    "func-names": 0,
    "max-nested-callbacks": 0,
    "no-invalid-this": 0,
    "no-magic-numbers": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "object-curly-spacing": [2, "always", { objectsInObjects: false }],
    "object-shorthand": 0,
    "prefer-arrow-callback": 0
  }
}
