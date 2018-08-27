/*
 * @Author: duantao-ds
 * @Date: 2018-08-26 20:15:08
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-28 00:09:15
 */

const query = require('../utils/query');

function getUserInfo(user) {

    let sql = `select * from users where user='${user}'`;

    return query(sql);
}

module.exports = getUserInfo;
