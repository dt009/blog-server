/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:03:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-19 10:39:13
 */

const Router = require('koa-router');

const router = new Router();

const getUserInfo = require('../../sql/userInfo/getUserInfo');
const resUtil = require('../../utils/res_util');

router.post('/get/userInfo', async ctx => {

    let {userId} = ctx.request.body;


    try {

        let selectData = await getUserInfo(userId);

        if (selectData[0]) {

            selectData[0].contact_way = JSON.parse(selectData[0].contact_way).contact_way;
            selectData[0].education = JSON.parse(selectData[0].education);
            selectData[0].skill = JSON.parse(selectData[0].skill).skill;

            console.log('获取的数据 ===>> ', selectData[0]);
            ctx.body = resUtil('ok', '获取成功', selectData[0])
        }

    } catch (error) {

        ctx.body = resUtil('fail', '获取失败', {message: error});

    }

})

module.exports = router;
