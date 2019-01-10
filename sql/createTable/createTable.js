/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 14:20:03
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-10 11:12:25
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

    query(createdUserInfoSql);

    let createdArticleInfoSql =
        `create table if not exists article(
            id INT NOT NULL AUTO_INCREMENT,
            userId INT NOT NULL ,
            userName VARCHAR(100) NOT NULL ,
            title VARCHAR(100) NOT NULL UNIQUE KEY,
            filename VARCHAR(100) NOT NULL,
            description LONGTEXT NOT NULL,
            tags LONGTEXT NOT NULL,
            categories LONGTEXT NOT NULL,
            rate INT NOT NULL,
            PRIMARY KEY ( id )
        )`;

    query(createdArticleInfoSql);


    let createdArticleCommentSql =
        `create table if not exists article_comment(
            id INT NOT NULL AUTO_INCREMENT,
            article_id INT NOT NULL UNIQUE KEY,
            commentList LONGTEXT NOT NULL,
            PRIMARY KEY ( id )
        )`;

    query(createdArticleCommentSql);


    // 2019-01-01之后的

    let createdBlogSql =
        `create table if not exists blog (
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(100) NOT NULL UNIQUE KEY,
            moment CHAR(13) NOT NULL,
            category INT NOT NULL UNIQUE KEY,
            tag INT NOT NULL UNIQUE KEY,
            context MEDIUMTEXT NOT NULL,
            comment_count INT NOT NULL,
            rate INT NOT NULL,
            look_count INT NOT NULL ,
            description TINYTEXT NULL,
            isShow TINYINT NOT NULL ,
            img TEXT NOT NULL,
            PRIMARY KEY (id)
        )`;

    query(createdBlogSql);

    let createdAllCategorySql =
        `create table if not exists all_category (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL UNIQUE KEY,
            code VARCHAR(100) NOT NULL UNIQUE KEY,
            moment CHAR(13) NOT NULL,
            description TINYTEXT NULL,
            use_count INT NOT NULL,
            PRIMARY KEY (id)
        )`;
    query(createdAllCategorySql);

    let createdAllTagSql =
        `create table if not exists all_tag (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL UNIQUE KEY,
            code VARCHAR(100) NOT NULL UNIQUE KEY,
            moment CHAR(13) NOT NULL,
            description TINYTEXT NULL,
            use_count INT NOT NULL,
            PRIMARY KEY (id)
        )`;
    query(createdAllTagSql);

    let createdTrCategoriesSql =
        `create table if not exists tr_categories (
            id INT NOT NULL AUTO_INCREMENT,
            blog_id INT NOT NULL UNIQUE KEY,
            category1 INT NULL,
            category2 INT NULL,
            category3 INT NULL,
            category4 INT NULL,
            category5 INT NULL,
            category6 INT NULL,
            category7 INT NULL,
            PRIMARY KEY (id)
        )`;
    query(createdTrCategoriesSql);

    let createdTrTagsSql =
        `create table if not exists tr_tags (
            id INT NOT NULL AUTO_INCREMENT,
            blog_id INT NOT NULL UNIQUE KEY,
            tag1 INT NULL,
            tag2 INT NULL,
            tag3 INT NULL,
            tag4 INT NULL,
            tag5 INT NULL,
            tag6 INT NULL,
            tag7 INT NULL,
            PRIMARY KEY (id)
        )`;
    query(createdTrTagsSql);

    let createdCommentSql =
        `create table if not exists comment (
            id INT NOT NULL AUTO_INCREMENT,
            blog_id INT NULL,
            comment_name VARCHAR(100) NOT NULL,
            comment_context MEDIUMTEXT NOT NULL,
            moment CHAR(13) NOT NULL,
            blog_rate INT NOT NULL,
            isShow TINYINT NOT NULL,
            PRIMARY KEY (id)
        )`;
    query(createdCommentSql);


}

module.exports = createTable;
