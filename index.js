require('babel-register')();
require('dotenv').config();

module.exports = require('./src/app');

// reference
// https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import
// https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/