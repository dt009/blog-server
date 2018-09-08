/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 10:21:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 21:44:26
 */

const query = require('../utils/query');

function addCategories(values) {
    let sql = `insert into categories set code=?, name=?, used_count=?, description=?;`;
    return query(sql, values);
}

module.exports = addCategories;
