/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:04:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 15:42:11
 */


const query = require('../utils/query');

function getUerInfo(userId) {
    let sql = `select * from user_info where userId='${userId}';`;
    return query(sql);
}

module.exports = getUerInfo;
