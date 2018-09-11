/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 11:04:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 17:10:18
 */


const query = require('../utils/query');

function getWebsiteInfo(userId) {
    let sql = `select * from website_info where userId='${userId}';`;
    return query(sql);
}

module.exports = getWebsiteInfo;
