/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:47:33
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 11:16:53
 */

const Router = require('koa-router');

const router = new Router();

// 获取全部标签
router.use(require('./getTags').routes());

// 新增标签
router.use(require('./addTags').routes());

module.exports = router;
