/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 14:20:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 19:11:17
 */

const query = require('../utils/query');

const createTable = () => {

    // 创建 tags 信息列表
    let createTagsSql =
        `create table if not exists tags(
            id INT NOT NULL AUTO_INCREMENT,
            code VARCHAR(20) NOT NULL,
            name VARCHAR(20) NOT NULL,
            used_count INT NOT NULL,
            PRIMARY KEY (id)
        )`;
    query(createTagsSql);

    // 创建 categories 表
    let createCategoriesSql =
        `create table if not exists categories(
            id INT NOT NULL AUTO_INCREMENT,
            code VARCHAR(20) NOT NULL,
            name VARCHAR(20) NOT NULL,
            used_count INT NOT NULL,
            PRIMARY KEY (id)
        )`;
    query(createCategoriesSql);

    // 创建 '用户' 的表
    let createUserSql =
        `create table if not exists users(
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL,
            pass VARCHAR(100) NOT NULL,
            avatar VARCHAR(100) NOT NULL,
            moment VARCHAR(100) NOT NULL,
            PRIMARY KEY ( id )
        )`;
    query(createUserSql);
}

module.exports = createTable;
