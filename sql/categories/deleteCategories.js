/*
 * @Author: duantao-ds
 * @Date: 2018-09-08 20:46:41
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 21:51:34
 */

const query = require('../utils/query');

function deleteCategories(id) {
    let sql = `delete from categories where id='${id}';`;
    return query(sql);
}

module.exports = deleteCategories;
