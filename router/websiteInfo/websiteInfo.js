/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:47:33
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 16:11:33
 */

const Router = require('koa-router');

const router = new Router();

// 获取站点
router.use(require('./getWebsiteInfo').routes());


// 更新标签
router.use(require('./updateWebsiteInfo').routes());


module.exports = router;
