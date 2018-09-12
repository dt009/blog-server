/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-12 10:41:34
 */

const Router = require('koa-router');

const router = new Router();
const util = require('util');

const updateWebsiteInfo = require('../../sql/websiteInfo/updateWebsiteInfo');
const resUtil = require('../../utils/res_util');

router.post('/update/websiteInfo', async ctx => {

    let {id, userId, userName, title, name, keyword, contactList} = ctx.request.body;

    if (util.isArray(keyword)) {
        keyword = keyword.join('=>');
    }

    if (util.isArray(contactList)) {
        let obj = {contactList};
        contactList = JSON.stringify(obj);
    }

    try {
        updateWebsiteInfo([userId, userName, title, name, keyword, contactList, id]);

        ctx.body = resUtil('ok', '更新成功', {userId, userName, title, name, keyword, contactList, id})

    } catch (error) {
        ctx.body = resUtil('fail', '更新失败', {message: error});
    }
})


module.exports = router;
