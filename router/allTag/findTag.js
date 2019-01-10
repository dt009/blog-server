/*
 * @Author: duantao-ds
 * @Date: 2019-01-09 16:40:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 17:31:00
 */

const Router = require('koa-router');

const router = new Router();
const resUtil = require('../../utils/res_util');

const findTag = require('../../sql/allTag/allTag').findTag;
const getAllTag = require('../../sql/allTag/allTag').getAllTag;

router.post('/find/tag', async ctx => {

    let {
        inputValue,
        pageNum = 1,
        pageSize = 10,
        column = 'use_count',
        orderWay = 'DESC'
    } = ctx.request.body;

    try {
        let findTagList;

        if (!!inputValue) {
            findTagList = await findTag(inputValue, pageNum, pageSize, column, orderWay);
        }
        else {
            findTagList = await getAllTag(pageNum, pageSize, column, orderWay);
        }

        if (findTagList.length > 0) {
            ctx.body = resUtil('ok', '请求成功', findTagList);
        }
        else {
            ctx.body = resUtil('ok', '请求成功', []);
        }
    } catch (error) {
        console.log(error);
        ctx.body = resUtil('fail', '获取失败', {message: error.message});
    }
})

module.exports = router;
