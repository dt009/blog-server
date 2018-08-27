/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-28 00:25:39
 */

const Router = require('koa-router');

const router = new Router();

const getRouter = require('../../sql/router/getRouter');
const resUtil = require('../../utils/res_util');

router.post('/allRouter', async ctx => {

    let selectData = await getRouter();

    if (selectData.length > 0) {
        let data = selectData.filter(item => item.name !== '测试');
        ctx.body = resUtil('ok', '请求成功', data);
    }
    else {
        ctx.body = resUtil('fail', '请求失败, 请检查', []);
    }
})

module.exports = router;
