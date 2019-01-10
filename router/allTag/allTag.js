/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:49:31
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 17:31:26
 */

const Router = require('koa-router');

const router = new Router();

router.use(require('./getAllTag').routes()); // 获取所有的标签
router.use(require('./findTag').routes()); // 查找的标签
// router.use(require('./addTag').routes()); // 添加标签
// router.use(require('./deleteTag').routes()); // 删除标签
// router.use(require('./updateTag').routes()); // 修改更新标签


module.exports = router;
