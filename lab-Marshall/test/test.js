'use strict';

const moo = require('cowsay');
const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');

describe('moo function', function() {
  it('should moo for us', function() {
    expect(cowsay('moooooo')).to.eql(moo.say({
      text : 'moooooo',
      e : '> <'
    }));
  });
});

for (var i = 0; i < 1000; i++) {
  describe('nyan cat test', function() {
    it('shoulld moo for us', function() {
      expect('nyan nyan nyan').to.eql('nyan nyan nyan');
    });
  });
}
