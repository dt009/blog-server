/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-20 15:44:29
 */

const query = require('../utils/query');

function updateArticle(value) {
    let sql = `update router set userId=?, userName=?, title=?, filename=?, description=?, tags=?, categories=?, rate=? where id=?;`
    return query(sql, value);
}

module.exports = updateArticle;
