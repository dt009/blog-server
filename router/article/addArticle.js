/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-20 15:48:27
 */

const Router = require('koa-router');

const router = new Router();

const addRouter = require('../../sql/router/addRouter');
const findRouter = require('../../sql/router/findRouter');
const resUtil = require('../../utils/res_util');

router.post('/add/router', async ctx => {

    let {name, path, label, icon, type} = ctx.request.body;

    try {
        let findResult = await findRouter(name);
        if (findResult.length > 0) {
            return ctx.body = resUtil('fail', '设置失败,已经存在相同的路由', []);
        }
    } catch (e) {
        return ctx.body = resUtil('fail', '失败, 查找失败, 联系管理', []);
    }

    try {
        await addRouter([name, path, label, type, icon,]);
        ctx.body = resUtil('ok', '路由设置成功', []);
    } catch (error) {
        ctx.body = resUtil('fail', '路由设置失败', {message: error});
    }
})

module.exports = router;
