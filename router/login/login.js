/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 19:12:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 16:03:54
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


    if (userInfo) {
        if (userInfo.length === 1) {

            if (user === userInfo[0].user && pass === userInfo[0].pass) {

                userInfo[0].isLogin = true;
                let session = ctx.session;
                session.isLogin = true;
                session.user = userInfo[0].user;
                session.id = userInfo[0].id;

                ctx.body = resUtil('ok', '成功', userInfo[0]);
            }
            else {
                userInfo.isLogin = false;
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
