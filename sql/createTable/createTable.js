/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 14:20:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 17:59:41
 */

const query = require('../utils/query');

const createTable = () => {

    // 创建 tags 信息列表
    let createTagsSql =
        `create table if not exists tags(
            id INT NOT NULL AUTO_INCREMENT,
            code VARCHAR(20) NOT NULL UNIQUE KEY,
            name VARCHAR(20) NOT NULL UNIQUE KEY,
            used_count INT NOT NULL,
            description VARCHAR(1000),
            PRIMARY KEY (id)
        )`;
    query(createTagsSql);

    // 创建 categories 表
    let createCategoriesSql =
        `create table if not exists categories(
            id INT NOT NULL AUTO_INCREMENT,
            code VARCHAR(20) NOT NULL UNIQUE KEY,
            name VARCHAR(20) NOT NULL UNIQUE KEY,
            used_count INT NOT NULL,
            description VARCHAR(1000),
            PRIMARY KEY (id)
        )`;
    query(createCategoriesSql);

    // 创建 '用户' 的表
    let createUserSql =
        `create table if not exists users(
            id INT NOT NULL AUTO_INCREMENT,
            user VARCHAR(100) NOT NULL,
            pass VARCHAR(100) NOT NULL,
            avatar VARCHAR(100) NOT NULL,
            moment VARCHAR(100) NOT NULL,
            PRIMARY KEY ( id )
        )`;
    query(createUserSql);

    // 创建 路由 表
    let createRouterSql =
        `create table if not exists router(
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL UNIQUE KEY,
            path VARCHAR(100) NOT NULL UNIQUE KEY,
            label VARCHAR(100) NOT NULL UNIQUE KEY,
            type VARCHAR(100) NOT NULL,
            icon VARCHAR(100),
            PRIMARY KEY ( id )
        )`;

    query(createRouterSql);

    // 创建 站点信息表
    let createdWebsiteInfoSql =
        `create table if not exists website_info(
            id INT NOT NULL AUTO_INCREMENT,
            userId INT NOT NULL UNIQUE KEY,
            userName VARCHAR(100) NOT NULL UNIQUE KEY,
            title VARCHAR(100) NOT NULL,
            name VARCHAR(100) NOT NULL,
            keyword VARCHAR(10000) NOT NULL,
            contactList LONGTEXT NOT NULL,
            PRIMARY KEY ( id )
        )`;

    query(createdWebsiteInfoSql);

    let createdUserInfoSql =
        `create table if not exists user_info(
            id INT NOT NULL AUTO_INCREMENT,
            userId INT NOT NULL UNIQUE KEY,
            userName VARCHAR(100) NOT NULL UNIQUE KEY,
            name VARCHAR(100) NOT NULL,
            gender INT NOT NULL,
            birthday VARCHAR(100) NOT NULL,
            profession VARCHAR(100) NOT NULL,
            education VARCHAR(100) NOT NULL,
            contact_way LONGTEXT NOT NULL,
            skill LONGTEXT NOT NULL,
            PRIMARY KEY ( id )
        )`;

    query(createdUserInfoSql)
}

module.exports = createTable;
