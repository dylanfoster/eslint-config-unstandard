"use strict";

module.exports = {
  rules: {
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-unused-vars": [2, { args: "after-used", argsIgnorePattern: "^next|reject|resolve"}],
    "no-use-before-define": [2, "nofunc"]
  }
}
