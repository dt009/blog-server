/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:38:19
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 11:46:36
 */

const Router = require('koa-router');

const router = new Router;

// 主页请求
router.get('/', async ctx => {
    await ctx.render('index', {
        title: '测试',
        test: '这是测试文本'
    })
});

module.exports = router;
