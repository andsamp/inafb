module.exports =
  {
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "env": {
      "node": true,
      "es6": true
    },
    "globals": {
      "it": true,
      "expect": true,
      "describe": true,
      "jest": true,
      "document": true,
      "test": true,
      "window": true,
      "fetch": true,
      "WebSocket": true,
      "alert": true,
      "URLSearchParams": true
    },
    "rules": {
      "indent": "off",
      "comma-dangle": ["error", "always-multiline"],
      "no-console": 0,
      "react/forbid-prop-types": 0, // Soft requirement now, try hard requ in future
      "react/jsx-boolean-value": [1, "always"],
      "react/jsx-indent": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-first-prop-new-line": [1, "multiline"],
      "react/jsx-max-props-per-line": [1, { "when": "multiline" }],
      "react/no-multi-comp": 0, // Soft requirement now, try hard requ in future
      "react/prefer-stateless-function": 0, // Soft requirement now, try hard requ in future
      "react/no-find-dom-node": 0,
      "react/prop-types": 0,
      "react/sort-comp": 0,
      "react/no-array-index-key": 0,
      "import/no-extraneous-dependencies": 0,
      "no-alert": 0,
      "jsx-a11y/href-no-hash": 0,
      "import/prefer-default-export": 0
    }
  }
