/*
 * @Author: duantao-ds
 * @Date: 2018-08-26 17:51:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 12:21:03
 */

const supertest = require('supertest');
const chai = require('chai');
const app = require('../server');

const expect = chai.expect;
const request = supertest(app.listen());


describe('路由前端相关的接口的测试', () => {

    it('获取路由接口的测试', done => {
        request
        .post('/router/allRouter')
        .expect(200)
        .end((err, res) => {
            console.log(res.body);
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.be.equal('ok');
            done();
        })
    });

    it('✅ (成功) 设置路由接口的测试', done => {
        request
            .post('/router/setRouter')
            .send({name: '测试', path: '测试', label: '测试', type: '测试', icon: '测试'})
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.be.equal('ok');
                done();
            })
    });

    it('❎ (失败) 设置路由接口的测试', done => {
        request
            .post('/router/setRouter')
            .send({page: 'HomePage', path: '/', label: '首页', icon: '&#xe618;'})
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.be.equal('fail');
                done();
            })
    })
})
