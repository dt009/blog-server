/*
 * @Author: duantao-ds
 * @Date: 2018-08-26 20:15:08
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-26 20:27:46
 */

const query = require('../utils/query');

function getUserInfo(user) {

    let sql = `select * from users where name='${user}'`;

    return query(sql);
}

module.exports = getUserInfo;
