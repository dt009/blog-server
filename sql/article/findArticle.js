/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-20 15:45:41
 */

const query = require('../utils/query');

function findArticle(title) {
    let sql = `select * from article where title='${title}';`
    return query(sql);
}

module.exports = findArticle;
