/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 11:16:40
 */

const Router = require('koa-router');

const router = new Router();

const getTags = require('../../sql/tags/getTags');
const resUtil = require('../../utils/res_util');

router.post('/get/allTags', async ctx => {

    try {
        let selectData = await getTags();

        if (selectData) {
            ctx.body = resUtil('ok', '获取成功', selectData)
        }

    } catch (error) {
        ctx.body = resUtil('fail', '获取失败', {message: error});
    }
})

module.exports = router;
