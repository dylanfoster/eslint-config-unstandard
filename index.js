"use strict";

module.exports = {
  env: {
    node: true
  },
  globals: {
    after: true,
    afterEach: true,
    before: true,
    beforeEach: true,
    console: true,
    describe: true,
    expect: true,
    it: true,
    xdescribe: true,
    xit: true
  },
  rules: {
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    "consistent-return": 2,
    "consistent-this": [0, "self"],
    curly: 2,
    "eol-last": 0,
    indent: [2, 2],
    "new-cap": 0,
    "no-else-return": 2,
    "no-eq-null": 2,
    "no-extra-parens": 2,
    "no-floating-decimal": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": [2, true],
    "no-nested-ternary": 2,
    "no-path-concat": 2,
    "no-process-exit": 0,
    "no-redeclare": 2,
    "no-self-compare": 2,
    "no-space-before-semi": 2,
    "no-trailing-spaces": 2,
    "no-undefined": 2,
    "no-underscore-dangle": 0,
    "no-unused-vars": [2, {
      "args": "none",
      "vars": "all"
    }],
    "no-use-before-define": 0,
    quotes: [2, "double", "avoid-escape"],
    semi: [2, "always"],
    "sort-vars": 2,
    "space-after-keywords": 2,
    strict: 2,
    "wrap-iife": [2, "inside"]
  }
};
