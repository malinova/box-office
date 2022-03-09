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

Changes to react-router:

1. Use v6 instad of v5
2. Change Switch tou Routes
