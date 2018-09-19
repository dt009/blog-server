/*
 * @Author: duantao-ds
 * @Date: 2018-09-08 20:46:41
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 17:57:53
 */

const query = require('../utils/query');

function updateUserInfo(values) {
    let sql = `update user_info set userId=?, userName=?, name=?, gender=?, birthday=?, profession=?, education=?, contact_way=?, skill=? where id=?;`;
    return query(sql, values);
}

module.exports = updateUserInfo;
