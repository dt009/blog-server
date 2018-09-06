/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:04:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 11:15:35
 */


const query = require('../utils/query');

function getTags() {
    let sql = `select * from tags`;
    return query(sql);
}

module.exports = getTags;
