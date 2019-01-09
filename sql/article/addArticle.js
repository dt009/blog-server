/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-20 15:44:15
 */

const query = require('../utils/query');

function addArticle(values) {
    let sql = `insert into article set userId=?, userName=?, title=?, filename=?, description=?, tags=?, categories=?, rate=?`;
    return query(sql, values);
}

module.exports = addArticle;
