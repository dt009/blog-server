/*
 * @Author: duantao-ds
 * @Date: 2019-01-09 16:40:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-09 18:44:31
 */

const Router = require('koa-router');

const router = new Router();
const resUtil = require('../../utils/res_util');

const findCategory = require('../../sql/allCategory/allCategory').findCategory;
const getAllCategory = require('../../sql/allCategory/allCategory').getAllCategory;

router.post('/find/category', async ctx => {

    let {
        inputValue,
        pageNum = 1,
        pageSize = 10,
        column = 'use_count',
        orderWay = 'DESC'
    } = ctx.request.body;

    try {
        let findCategoryList;

        if (!!inputValue) {
            findCategoryList = await findCategory(inputValue, pageNum, pageSize, column, orderWay);
        }
        else {
            findCategoryList = await getAllCategory(pageNum, pageSize, column, orderWay);
        }

        if (findCategoryList.length > 0) {
            ctx.body = resUtil('ok', '请求成功', findCategoryList);
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
