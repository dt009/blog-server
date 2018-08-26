/*
 * @Author: duantao-ds
 * @Date: 2018-08-16 16:25:06
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-26 19:59:52
 */

function resUtil(status, message, data) {

    return {
        status: status,
        message: message,
        data: data,
    }
}

module.exports = resUtil;
