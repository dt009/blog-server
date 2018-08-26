/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 19:12:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-26 18:40:00
 */

const Router = require('koa-router');
const query = require('../../sql/utils/query');

const router = new Router();

router.post('/login', async ctx => {

    let postData = ctx.request.body;

    ctx.body = {
        name: 'dt009',
        age: '27'
    }
})

module.exports = router;
