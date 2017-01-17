/**
 * Created by snow on 2017/1/17.
 */
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function(){
    it('1 加 1 应该等于2', function(){
        expect(add(1,1)).to.be.equal(2);
    });
});