Changes to .eslintrc and package.json:

1. Use @babel/eslint-parser instead of babel-eslint
   npm uninstall babel-eslint babel-eslint-plugin  
   npm install --save-dev @babel/eslint-parser @babel/eslint-plugin

- needs @babel/core
  npm install --save-dev @babel/core

2. .eslintrc
   "parser": "@babel/eslint-parser",
   "parserOptions": {
   "requireConfigFile": false,
   "babelOptions": {
   "presets": ["@babel/preset-react"]
   }
   }

3. Add this rule to fix eslint function-component-definition and to allow arrow function definitions
   "react/function-component-definition": [
   0,
   {
   "namedComponents": "arrow-function",
   "unnamedComponents": "arrow-function"
   }
   ]
4. Fix arrow-body-style:
   "arrow-body-style": [0]
5. Fix "preffer-arrow-calback":
   "prefer-arrow-callback": [0]

Changes to react-router:

1. Use v6 instad of v5
2. Change Switch tou Routes
