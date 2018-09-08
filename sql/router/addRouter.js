/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 21:37:30
 */

const query = require('../utils/query');

function addRouter(values) {
    let sql = `insert into router set name=?, path=?, label=?, type=?, icon=?;`;
    return query(sql, values);
}

module.exports = addRouter;
