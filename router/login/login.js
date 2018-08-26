/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 19:12:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-26 21:05:10
 */

const Router = require('koa-router');
const query = require('../../sql/utils/query');
const resUtil = require('../../utils/res_util');
const getUserInfo = require('../../sql/users/getUserInfo');

const router = new Router();

router.post('/login', async ctx => {

    let postData = ctx.request.body;

    let {user, pass} = postData;

    let userInfo = await getUserInfo(user);

    console.log('用户信息 ==>> ', userInfo);

    if (userInfo) {
        if (userInfo.length === 1) {

            console.log(userInfo[0]);

            if (user === userInfo[0].name && pass === userInfo[0].pass) {
                userInfo.isLogin = true;
                console.log('登录成功...');
                ctx.body = resUtil('ok', '成功', userInfo[0]);
            }
            else {
                userInfo.isLogin = false;
                console.log('登录失败...');
                ctx.body = resUtil('fail', '用户名或密码错误', userInfo[0]);
            }

        }
        else {
            userInfo.isLogin = false;
            console.log('登录失败...');
            ctx.body = resUtil('fail', '登录失败', userInfo[0]);
        }
    }
})

module.exports = router;
