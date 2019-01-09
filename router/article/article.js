/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-21 10:50:50
 */

const Router = require('koa-router');

const router = new Router();

// 获取所有的文章列表
router.use(require('./getArticle').routes());

// 上传文章
router.use(require('./uploadArticle').routes());

module.exports = router;
