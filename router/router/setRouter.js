/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-28 00:19:42
 */

const Router = require('koa-router');

const router = new Router();

const getRouter = require('../../sql/router/setRouter');
const resUtil = require('../../utils/res_util');

router.post('/setRouter', async ctx => {

    let {name, path, label, icon} = ctx.request.body;

    try {
        await getRouter([name, path, label, icon]);
        ctx.body = resUtil('ok', '路由设置成功', []);
    } catch (error) {
        ctx.body = resUtil('fail', '路由设置失败', {message: error});
    }
})

module.exports = router;
