/*
 * @Author: duantao-ds
 * @Date: 2018-09-08 21:35:27
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 21:36:19
 */



const query = require('../utils/query');

function getCategories() {
    let sql = `select * from categories`;
    return query(sql);
}

module.exports = getCategories;
