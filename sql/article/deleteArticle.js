/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-20 15:40:22
 */

const query = require('../utils/query');

function deleteArticle(id) {
    let sql = `delete from article where id='${id}';`
    return query(sql);
}

module.exports = deleteArticle;
