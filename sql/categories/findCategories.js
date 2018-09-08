/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 10:21:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 21:52:30
 */

const query = require('../utils/query');

function findCategories(code) {
    let sql = `select * from categories where code='${code}'`;
    return query(sql);
}

module.exports = findCategories;
