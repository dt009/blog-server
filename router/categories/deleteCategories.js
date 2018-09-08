/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 22:06:45
 */

const Router = require('koa-router');

const router = new Router();

const deleteCategories = require('../../sql/categories/deleteCategories');
const resUtil = require('../../utils/res_util');

router.post('/delete/Categories', async ctx => {

    let {code, name, used_count, description, id} = ctx.request.body;

    try {
        await deleteCategories(id);

        ctx.body = resUtil('ok', '删除成功', {code, name, used_count, description, id})

    } catch (error) {
        ctx.body = resUtil('fail', '删除失败', {message: error});
    }
})

module.exports = router;
