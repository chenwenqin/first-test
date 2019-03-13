var add = require('../lib/add.js');
var expect = require('chai').expect;

describe('大数相加测试', function () {
    it('11111111111111111111加11111111111111111111应该等于22222222222222222222', function () {
        expect(add('11111111111111111111', '11111111111111111111')).to.be.equal('22222222222222222222')
    })
});