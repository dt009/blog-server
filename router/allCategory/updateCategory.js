/*
 * @Author: duantao-ds
 * @Date: 2019-01-09 16:40:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 15:23:10
 */

const Router = require('koa-router');

const router = new Router();
const resUtil = require('../../utils/res_util');

const updateCategory = require('../../sql/allCategory/allCategory').updateCategory;

router.post('/update/category', async ctx => {

    let {id, name, code, moment, description, use_count} = ctx.request.body;

    try {

        await updateCategory(id, name, code, moment, description, use_count);
        ctx.body = resUtil('ok', '更新成功', []);

    } catch (error) {
        ctx.body = resUtil('fail', '更新失败', {message: error.message});
    }
})

module.exports = router;
