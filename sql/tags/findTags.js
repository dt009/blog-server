/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 10:21:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 10:51:10
 */

const query = require('../utils/query');

function findTags(code) {
    let sql = `select * from tags where code='${code}'`;
    return query(sql);
}

module.exports = findTags;
