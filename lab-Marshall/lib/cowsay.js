'use strict';

const moo = require('cowsay');

const cowsay = module.exports = function(defaultMoo) {
  let newText = process.argv[2] || defaultMoo;
  return moo.say({
    text : newText,
    e : '> <'
  });
};

console.log(cowsay('moooooo'));
