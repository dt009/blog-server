/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 17:51:00
 */

const Router = require('koa-router');

const router = new Router();
const util = require('util');

const updateWebsiteInfo = require('../../sql/websiteInfo/updateWebsiteInfo');
const resUtil = require('../../utils/res_util');

router.post('/update/websiteInfo', async ctx => {

    let {id, userId, userName, title, name, keyword, contactList} = ctx.request.body;

    console.log(ctx.request.body);

    if (util.isArray(keyword)) {
        keyword = keyword.join('=>');
    }

    console.log(keyword);

    if (util.isArray(contactList)) {
        let obj = {contactList};
        contactList = JSON.stringify(obj);
    }

    console.log(contactList);

    try {
        updateWebsiteInfo([userId, userName, title, name, keyword, contactList, id]);

        ctx.body = resUtil('ok', '更新成功', {userId, userName, title, name, keyword, contactList, id})

    } catch (error) {
        ctx.body = resUtil('fail', '更新失败', {message: error});
    }
})


module.exports = router;
