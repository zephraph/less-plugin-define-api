var shell = require('shelljs');
var less = require('less');
require('babel-core/register');
var Plugin = require('./plugin')['default'];
var plugin = new Plugin();

less.render(shell.cat('./test.less'), { plugins: [plugin] })
  .then(function(output) {
    console.log(output);
  },
  function (error) {
    console.log('Error: ', error);
  });
