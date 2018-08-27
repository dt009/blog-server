/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-27 20:39:42
 */

const query = require('../utils/query');

function setRouter(values) {
    let sql = `insert into router set name=?, path=?, label=?, icon=?;`;
    return query(sql, values);
}

module.exports = setRouter;
