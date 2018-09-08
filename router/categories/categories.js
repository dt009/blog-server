/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:47:33
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 22:11:38
 */

const Router = require('koa-router');

const router = new Router();

// 获取全部的分类
router.use(require('./getCategories').routes());

// 新增分类
router.use(require('./addCategories').routes());

// 更新分类
router.use(require('./updateCategories').routes());

// 删除分类
router.use(require('./deleteCategories').routes());

module.exports = router;
