/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-27 21:03:01
 */

const Router = require('koa-router');

const router = new Router();

router.use(require('./setRouter').routes());
router.use(require('./getRouter').routes());

module.exports = router;
