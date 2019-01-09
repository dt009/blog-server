/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-09 18:17:11
 */

const Router = require('koa-router');

const router = new Router();

router.use(require('./getAllCategory').routes()); // 获取所有的类型
router.use(require('./findCategory').routes()); // 查找的类型


module.exports = router;
