module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/prop-types": 0
  }
}