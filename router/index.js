/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:40:33
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-27 21:03:51
 */

const Router = require('koa-router');

const router = new Router();

// 主页请求的路由
router.use(require('./home/home').routes());

// tags 相关的路由
router.use('/tags', require('./tags/tags').routes());

// 登录
router.use(require('./login/login').routes());

// 路由相关
router.use('/router', require('./router/router').routes());

module.exports = router;
