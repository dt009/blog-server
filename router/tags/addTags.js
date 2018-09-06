/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 10:51:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 11:16:30
 */

const Router = require('koa-router');

const router = new Router();

const setTags = require('../../sql/tags/setTags');
const findTags = require('../../sql/tags/findTags');

const resUtil = require('../../utils/res_util');

router.post('/add/tags', async ctx => {

    let {code, name, used_count, description} = ctx.request.body;

    try {
        let findRes = await findTags(code);

        if (findRes && findRes.length > 0) {
            return ctx.body = resUtil('fail', '设置失败, 标签已经存在', []);
        }
    } catch (error) {
        return ctx.body = resUtil('fail', '设置失败, 查找是失败', []);
    }

    try {
        await setTags([code, name, used_count, description]);
        ctx.body = resUtil('ok', '设置成功', {code, name, used_count, description});
    } catch (error) {
        ctx.body = resUtil('fail', '设置失败', {message: error});
    }
})

module.exports = router;
