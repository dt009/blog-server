/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 14:05:46
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 14:31:16
 */

const mysql = require('mysql');
const config = require('../../config/config');


/**
 * @description 创建连接池
 */

 const pool = mysql.createPool({
     host: config.database.HOST,
     user: config.database.USERNAME,
     password: config.database.PASSWORD,
     database: config.database.DATABASE
 });


/**
 *
 * @description 数据库的最终操作
 * @param {sql语句} sql  string
 * @param {要插入的值} values array @default []
 * @returns Promise 对象
 */

function query(sql, values = []) {

    return new Promise((resolve, reject) => {

        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }

                    connection.release();
                })
            }
        })
    })
}


module.exports = query;
