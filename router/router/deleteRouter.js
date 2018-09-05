/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 10:56:59
 */

const Router = require('koa-router');

const router = new Router();

const deleteRouter = require('../../sql/router/deleteRouter');
const resUtil = require('../../utils/res_util');

router.post('/deleteRouter', async ctx => {

    let {name, path, label, icon, type, id} = ctx.request.body;

    try {
        await deleteRouter(id);
        ctx.body = resUtil('ok', '删除成功', {name, path, label, icon, type, id})
    } catch (error) {
        console.log(error);

        ctx.body = resUtil('fail', '删除失败', {message: error});
    }

})

module.exports = router;
