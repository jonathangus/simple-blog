module.exports = {
    "extends": [
      "airbnb",
      "plugin:flowtype/recommended"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "plugins": [
      "flowtype"
    ],
    "globals": {
      "describe": true,
      "it": true,
      "expect": true,
      "System": true
    },
    "rules": {
        "no-console": "off",
        "strict": 0,
        "comma-dangle": 0,
        "react/jsx-filename-extension": 0,
        "arrow-body-style": 0,
        "import/prefer-default-export": 0,
        "prefer-default-export": 0,
        "no-case-declarations": 0,
        "jsx-a11y/anchor-is-valid": 0
    }
};
