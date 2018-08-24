/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:47:33
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 11:54:06
 */

const Router = require('koa-router');

const router = new Router();

router.post('/get/all', async ctx => {
    ctx.body = {
        name: 111,
        age: 222
    }
})

module.exports = router;
