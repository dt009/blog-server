/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:47:33
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 18:16:31
 */

const Router = require('koa-router');

const router = new Router();

// 获取用户信息
router.use(require('./getUserInfo').routes());


// 更新用户信息
router.use(require('./updateUserInfo').routes());


module.exports = router;
