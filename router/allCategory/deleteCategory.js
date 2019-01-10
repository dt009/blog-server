/*
 * @Author: duantao-ds
 * @Date: 2019-01-09 16:40:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 15:01:01
 */

const Router = require('koa-router');

const router = new Router();
const resUtil = require('../../utils/res_util');

const deleteCategory = require('../../sql/allCategory/allCategory').deleteCategory;

router.post('/delete/category', async ctx => {

    let id = ctx.request.body.id;

    try {

        await deleteCategory(id);
        ctx.body = resUtil('ok', '删除成功', []);

    } catch (error) {
        ctx.body = resUtil('fail', '删除失败', {message: error.message});
    }
})

module.exports = router;
