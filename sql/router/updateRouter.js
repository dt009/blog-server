/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 11:22:35
 */

const query = require('../utils/query');

function updateRouter(value) {
    let sql = `update router set name=?, path=?, label=?, type=?, icon=? where id=?;`
    return query(sql, value);
}

module.exports = updateRouter;
