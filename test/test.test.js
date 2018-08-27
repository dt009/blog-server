/*
 * @Author: duantao-ds
 * @Date: 2018-08-26 17:51:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-28 00:19:57
 */

const supertest = require('supertest');
const expect = require('chai').expect;

describe('单元测试练习', () => {
    it('测试类型 boolean ', () => {
        expect(false).to.be.not.ok;
    });

    it('测试 equal', () => {
        expect(4 + 5).to.be.equal(9);
    });

    it('测试 equal (2)', () => {
        expect(4 + 5).to.be.equal(5 + 4);
    })
})
