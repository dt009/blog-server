/*
 * @Author: duantao-ds
 * @Date: 2018-09-08 20:46:41
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 21:58:09
 */

const query = require('../utils/query');

function updateCategories(values) {
    let sql = `update categories set code=?, name=?, used_count=?, description=? where id=?;`;
    return query(sql, values);
}

module.exports = updateCategories;
