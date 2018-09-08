/*
 * @Author: duantao-ds
 * @Date: 2018-09-08 20:46:41
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 20:49:00
 */

const query = require('../utils/query');

function updateTags(values) {
    let sql = `update tags set code=?, name=?, used_count=?, description=? where id=?;`;
    return query(sql, values);
}

module.exports = updateTags;
