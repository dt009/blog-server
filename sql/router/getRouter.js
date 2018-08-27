/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-27 20:41:24
 */

const query = require('../utils/query');

function getRouter() {
    let sql = `select * from router`
    return query(sql);
}

module.exports = getRouter;
