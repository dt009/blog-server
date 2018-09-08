/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 22:09:34
 */

const Router = require('koa-router');

const router = new Router();

const updateCategories = require('../../sql/categories/updateCategories');
const resUtil = require('../../utils/res_util');

router.post('/update/Categories', async ctx => {

    let {code, name, used_count, description, id} = ctx.request.body;

    try {
        updateCategories([code, name, used_count, description, id]);

        ctx.body = resUtil('ok', '更新成功', {code, name, used_count, description, id})

    } catch (error) {
        ctx.body = resUtil('fail', '更新失败', {message: error});
    }
})

module.exports = router;
