/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-20 15:26:38
 */

const query = require('../utils/query');

function getArticle() {
    let sql = `select * from article`
    return query(sql);
}

module.exports = getArticle;
