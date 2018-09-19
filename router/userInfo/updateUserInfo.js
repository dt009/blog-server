/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 18:11:24
 */

const Router = require('koa-router');

const router = new Router();
const util = require('util');

const updateUserInfo = require('../../sql/userInfo/updateUserInfo');
const resUtil = require('../../utils/res_util');

router.post('/update/userInfo', async ctx => {

    let {
        id,
        userId,
        userName,
        name,
        gender,
        birthday,
        profession,
        education,
        contact_way,
        skill
    } = ctx.request.body;

    console.log(ctx.request.body);

    if (util.isArray(contact_way)) {
        let way = {contact_way}
        contact_way = JSON.stringify(way)
    }

    if (util.isObject(education)) {
        education = JSON.stringify(education)
    }

    if (util.isArray(skill)) {
        let obj = {skill};
        skill = JSON.stringify(obj);
    }

    try {
        updateUserInfo([
            userId,
            userName,
            name,
            gender,
            birthday,
            profession,
            education,
            contact_way,
            skill,
            id,
        ]);

        ctx.body = resUtil('ok', '更新成功', {
            id,
            userId,
            userName,
            name,
            gender,
            birthday,
            profession,
            education,
            contact_way,
            skill,
        })

    } catch (error) {
        ctx.body = resUtil('fail', '更新失败', {message: error});
    }
})


module.exports = router;
