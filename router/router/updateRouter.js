/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 11:22:44
 */

const Router = require('koa-router');

const router = new Router();

const updateRouter = require('../../sql/router/updateRouter');
const resUtil = require('../../utils/res_util');

router.post('/update/router', async ctx => {

    let {name, path, label, icon, type, id} = ctx.request.body;

    try {
        await updateRouter([name, path, label, type, icon, id]);
        ctx.body = resUtil('ok', '更新成功', {name, path, label, icon, type, id})
    } catch (error) {
        ctx.body = resUtil('fail', '更新失败', {message: error});
    }
})

module.exports = router;
