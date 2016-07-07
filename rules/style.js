"use strict";

module.exports = {
  rules: {
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    "camelcase": 2,
    "comma-spacing": 2,
    "computed-property-spacing": 2,
    "consistent-this": [2, "self"],
    "eol-last": 2,
    "func-names": 2,
    "indent": [2, 2],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "linebreak-style": 2,
    "lines-around-comment": [2, {
      "allowBlockStart": true,
      "allowArrayStart": true,
      "allowObjectStart": true,
      "beforeBlockComment": true,
      "beforeLineComment": true
    }],
    "max-len": [1, { code: 100, ignoreComments: true, ignoreUrls: true }],
    "max-nested-callbacks": [2, 3],
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 2,
    "no-inline-comments": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, { max: 1 }],
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [2, "always", {
      objectsInObjects: false
    }],
    "one-var": [2, { uninitialized: "always", initialized: "never" }],
    "operator-linebreak": 2,
    "padded-blocks": [2, "never"],
    "quote-props": [2, "consistent-as-needed"],
    "quotes": [2, "double", "avoid-escape"],
    "semi-spacing": 2,
    "semi": 2,
    "sort-vars": [2, { ignoreCase: false }],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, { anonymous: "always", named: "never" }],
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "wrap-regex": 2
  }
}
