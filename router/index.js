/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:40:33
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-09 18:45:13
 */

const Router = require('koa-router');

const router = new Router();

// 主页请求的路由
router.use(require('./home/home').routes());

// tags 相关的路由
router.use('/tags', require('./tags/tags').routes());

// 登录
router.use(require('./login/login').routes());

// 路由相关
router.use('/router', require('./router/router').routes());

// 分类相关
router.use('/categories', require('./categories/categories').routes());

// 站点信息
router.use('/websiteInfo', require('./websiteInfo/websiteInfo').routes());

// 用户信息相关
router.use('/userInfo', require('./userInfo/userInfo').routes());

// 博客文章相关
router.use('/article', require('./article/article').routes());

// 测试 test
router.use(require('./test').routes());


// 2019-01-09 之后的

// 所有的分类
router.use('/allCategory', require('./allCategory/allCategory').routes());

module.exports = router;
