/*
 * @Author: duantao-ds
 * @Date: 2019-01-09 16:13:08
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-09 18:28:47
 */

const query = require('../utils/query');

/**
 * @description 获得所有的标签 分页排序
 * @param {number} pageNum 第几页
 * @param {number} pageSize 每一页多少条数据
 * @param {string} column 要排序的字段
 * @param {string} orderWay 排序方式
 * @returns  查询结果
 */
function getAllCategory(pageNum, pageSize, column, orderWay) {
    let sql = `SELECT * FROM all_category ORDER BY ${column} ${orderWay} LIMIT ${(pageNum - 1) * pageSize}, ${pageSize}`;
    return query(sql);
};


/**
 *
 * @description 根据用户输入查找类型
 * @param {string} inputValue 用户输入信息
 * @param {number} pageNum 第几页
 * @param {number} pageSize 每一页多少条数据
 * @param {string} column 要排序的字段
 * @param {string} orderWay 排序方式
 * @returns 查询的结果
 */
function findCategory(inputValue, pageNum, pageSize, column, orderWay) {

    let sql =
        `SELECT * FROM all_category
        WHERE name LIKE '%${inputValue}%' OR code LIKE '%${inputValue}%'
        ORDER BY ${column} ${orderWay} LIMIT ${(pageNum - 1) * pageSize}, ${pageSize}`;

    return query(sql);
}

module.exports = {
    getAllCategory,
    findCategory
}
