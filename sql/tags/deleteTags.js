/*
 * @Author: duantao-ds
 * @Date: 2018-09-08 20:46:41
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 20:51:30
 */

const query = require('../utils/query');

function deleteTags(id) {
    let sql = `delete from tags where id='${id}';`;
    return query(sql);
}

module.exports = deleteTags;
