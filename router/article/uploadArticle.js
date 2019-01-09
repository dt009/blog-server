/*
 * @Author: duantao-ds
 * @Date: 2018-09-21 10:44:30
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-21 10:49:55
 */

const Router = require('koa-router');

const router = new Router();

const resUtil = require('../../utils/res_util');

const uploadFile = require('./upload');

router.post('/upload/article', async ctx => {

    try {

        let result = await uploadFile(ctx);
        if (result) {

            ctx.body = resUtil('ok', '成功', result);
        }
        else {
            ctx.body = resUtil('fail', '上传出错', result)
        }
    } catch (error) {
        ctx.body = resUtil('fail', '上传出错', {message: error})
    }

})

module.exports = router;
