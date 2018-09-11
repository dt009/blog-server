/*
 * @Author: duantao-ds
 * @Date: 2018-09-08 20:46:41
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 17:49:20
 */

const query = require('../utils/query');

function updateWebsiteInfo(values) {
    let sql = `update website_info set userId=?, userName=?, title=?, name=?, keyword=?, contactList=? where id=?;`;
    return query(sql, values);
}

module.exports = updateWebsiteInfo;
