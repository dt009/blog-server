/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 11:22:23
 */

const Router = require('koa-router');

const router = new Router();

const getRouter = require('../../sql/router/getRouter');
const resUtil = require('../../utils/res_util');

router.post('/get/allRouter', async ctx => {

    let selectData = await getRouter();

    if (selectData.length > 0) {
        let data = selectData.filter(item => item.name !== '测试');
        ctx.body = resUtil('ok', '请求成功', data);
    }
    else {
        ctx.body = resUtil('ok', '请求成功', []);
    }
})

module.exports = router;
