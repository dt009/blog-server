/*
 * @Author: duantao-ds
 * @Date: 2019-01-09 16:40:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 18:27:52
 */

const Router = require('koa-router');

const router = new Router();
const resUtil = require('../../utils/res_util');

const addTag = require('../../sql/allTag/allTag').addTag;
const findNameTag = require('../../sql/allTag/allTag').findNameTag;
const findCodeTag = require('../../sql/allTag/allTag').findCodeTag;

router.post('/add/Tag', async ctx => {


    let {
        name,
        code,
        moment = new Date().getTime(),
        description = '',
        use_count = 0
    } = ctx.request.body;


    // 添加新的类型之前先查看是否已经拥有了要添加的类型
    let findData_name = await findNameTag(name);
    let findData_code = await findCodeTag(code);

    if (findData_name.length > 0) {
        return ctx.body =  resUtil('fail', '设置失败, 类型名称重复', []);
    }

    if (findData_code.length > 0) {
        return ctx.body =  resUtil('fail', '设置失败, 类型code重复', []);
    }

    try {

        await addTag(name, code, moment, description, use_count);
        ctx.body = resUtil('ok', '类型设置成功', {code, name, moment, description, use_count});

    } catch (error) {
        ctx.body = resUtil('fail', '设置失败', {message: error.message});
    }
})

module.exports = router;
