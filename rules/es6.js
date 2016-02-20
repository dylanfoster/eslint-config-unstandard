"use strict";

module.exports = {
  env: {
    es6: true
  },
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    forOf: true,
    generators: true,
    objectLiteralComputedProperties: true,
    objectLiteralShorthandMethods:true,
    objectLiteralShorthandProperties: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true
  },
  rules: {
    "arrow-body-style": [2 , "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": 2,
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": [2, "always"],
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 2
  }
}
