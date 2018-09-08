/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 22:07:17
 */

const Router = require('koa-router');

const router = new Router();

const getCategories = require('../../sql/categories/getCategories');
const resUtil = require('../../utils/res_util');

router.post('/get/allCategories', async ctx => {

    try {
        let selectData = await getCategories();

        if (selectData) {
            ctx.body = resUtil('ok', '获取成功', selectData)
        }

    } catch (error) {
        ctx.body = resUtil('fail', '获取失败', {message: error});
    }
})

module.exports = router;
