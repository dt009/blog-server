/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 10:12:35
 */

const query = require('../utils/query');

function findRouter(name) {
    let sql = `select * from router where name='${name}';`
    return query(sql);
}

module.exports = findRouter;
