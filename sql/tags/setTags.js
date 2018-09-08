/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 10:21:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-07 11:42:33
 */

const query = require('../utils/query');

function setTags(values) {
    let sql = `insert into tags set code=?, name=?, used_count=?, description=?;`;
    return query(sql, values);
}

module.exports = setTags;
