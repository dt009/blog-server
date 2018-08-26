/*
 * @Author: duantao-ds
 * @Date: 2018-08-26 17:51:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-26 21:27:43
 */

const supertest = require('supertest');
const chai = require('chai');
const app = require('../server');

const expect = chai.expect;
const request = supertest(app.listen());


//
describe('测试请求接口', () => {

    // 测试用例
    it('测试 login 接口', done => {
        request
            .post('/login')
            .send({user: 'dt009', pass:  'Iamdt009'})
            .expect(200)
            .end((err, res) => {
                // 断言判断结果为 object 类型
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.be.equal('ok')
                done();
            })
    });

    // 测试练习
    it('测试练习', () => {
        expect(4 + 5).to.be.equal(9);
    })
})
