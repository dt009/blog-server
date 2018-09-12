/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:38:19
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-12 11:24:08
 */

const Router = require('koa-router');

const router = new Router;

// 主页请求
router.get('/', async ctx => {
    await ctx.render('index', {})
});

module.exports = router;
