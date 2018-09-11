/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 17:23:24
 */

const Router = require('koa-router');

const router = new Router();

const getWebsiteInfo = require('../../sql/websiteInfo/getWebsiteInfo');
const resUtil = require('../../utils/res_util');

router.post('/get/websiteInfo', async ctx => {

    let {userId} = ctx.request.body;


    try {

        let selectData = await getWebsiteInfo(userId);

        if (selectData[0]) {

            selectData[0].keyword = selectData[0].keyword.split('=>');
            selectData[0].contactList = JSON.parse(selectData[0].contactList).contactList;
            ctx.body = resUtil('ok', '获取成功', selectData[0])
        }

    } catch (error) {

        ctx.body = resUtil('fail', '获取失败', {message: error});

    }

})

module.exports = router;
