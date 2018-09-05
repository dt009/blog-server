/*
 * @Author: duantao-ds
 * @Date: 2018-08-27 20:34:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 11:01:00
 */

const query = require('../utils/query');

function deleteRouter(id) {
    let sql = `delete from router where id='${id}';`
    return query(sql);
}

module.exports = deleteRouter;
