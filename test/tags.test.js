/*
 * @Author: duantao-ds
 * @Date: 2018-08-31 09:47:24
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 09:51:08
 */

const supertest = require('supertest');
const chai = require('chai');
const app = require('../server');

const expect = chai.expect;
const request = supertest(app.listen());


describe('测试 tags 相关的', () => {

    it('获取全部标签', done => {
        request
            .post('/tags/get/all')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                console.log(res.body);
                done();
            })
    })
})
