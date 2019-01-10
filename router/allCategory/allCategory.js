/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 15:01:30
 */

const Router = require('koa-router');

const router = new Router();

router.use(require('./getAllCategory').routes()); // 获取所有的类型
router.use(require('./findCategory').routes()); // 查找的类型
router.use(require('./addCategory').routes()); // 添加类型
router.use(require('./deleteCategory').routes()); // 删除类型


module.exports = router;
