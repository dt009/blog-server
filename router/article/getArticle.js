/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-20 15:50:39
 */

const Router = require('koa-router');

const router = new Router();

const getArticle = require('../../sql/article/getArticle');
const resUtil = require('../../utils/res_util');

router.post('/get/article', async ctx => {

    try {
        let selectData = await getArticle();

        if (selectData.length > 0) {
            ctx.body = resUtil('ok', '请求成功', data);
        }
        else {
            ctx.body = resUtil('ok', '请求成功', []);
        }
    } catch (error) {
        ctx.body = resUtil('fail', '获取失败', {message: error});
    }
})

module.exports = router;
