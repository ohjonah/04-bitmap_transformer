'use strict';

const expect = require('chai').expect;
const invertTransform = require(`${__dirname}/../lib/invert-transform.js`);

describe('Color Invert', function(){
  describe('with valid string', () => {
    it('return inverse', done => {
      let test = invertTransform('00000000');
      expect(test).to.be.a('string');
      expect(test).to.deep.equal('ffffff00');
      done();
    });
  });
});
