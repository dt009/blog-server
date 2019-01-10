/*
 * @Author: duantao-ds
 * @Date: 2019-01-09 16:13:08
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 15:41:34
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
};



/**
 * @description 添加新的类型
 *
 * @param {string} name  名称
 * @param {string} code  code
 * @param {string} moment 创建时间
 * @param {string} description 简单描述
 * @param {number} use_count 使用次数
 * @returns
 */
function addCategory(name, code, moment, description, use_count) {

    let sql =
        `INSERT INTO all_category
        (name, code, moment, description, use_count)
        VALUES
        ('${name}', '${code}', '${moment}', '${description}', ${use_count})`

        return query(sql)
}


/**
 * @description 赞找名称精确查找
 *
 * @param {string} name 名称
 * @returns
 */
function findNameCategory(name) {

    let sql = `SELECT * FROM all_category WHERE name='${name}'`;
    return query(sql);
}


/**
 * @description 按照 code 精确查找
 *
 * @param {string} code code
 * @returns
 */
function findCodeCategory(code) {

    let sql = `SELECT * FROM all_category WHERE code='${code}'`;
    return query(sql);
};


/**
 * @description 删除指定的类型
 *
 * @param {number} id id
 * @returns
 */
function deleteCategory(id) {

    let sql = `DELETE FROM all_category WHERE id=${id}`;

    return query(sql);
}


/**
 * @description 更新或修改类型
 *
 * @param {number} id 类型标识
 * @param {string} name 名称
 * @param {string} code code
 * @param {string} moment 创建时间
 * @param {string} description 简单描述
 * @param {number} use_count 使用次数
 * @returns
 */
function updateCategory(id, name, code, moment, description, use_count) {

    let sql =
        `UPDATE all_category SET
        name='${name}',
        code='${code}',
        moment='${moment}',
        description='${description}',
        use_count='${use_count}'
        WHERE id=${id}`;

    return query(sql);
}

module.exports = {
    getAllCategory,
    findCategory,
    addCategory,
    findNameCategory,
    findCodeCategory,
    deleteCategory,
    updateCategory
}
