/*
 * @Author: duantao-ds
 * @Date: 2019-01-10 16:38:15
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-02-06 13:10:44
 */

const query = require('../utils/query');

/**
 * @description 查找所有文章的的类型列表展示
 * @returns  查询结果
 */
function getTrTag() {

    let sql =
        `SELECT * FROM tr_tags`;

    return query(sql)
};

/**
 *
 * @description 根据 id 查找特定文章的类型列表
 * @param {number} id
 * @returns 查询的结果
 */
function findTrTag(id) {

    let sql =
        `SELECT * FROM tr_tags
        WHERE id=${id}`;

    return query(sql);
};

/**
 * @description 跟特定的文章添加新的类型
 *
 * @param {string} name 名称
 * @returns
 */
function findNameTag(id, ...list) {

    let sql = `SELECT * FROM all_tag WHERE name='${name}'`;
    return query(sql);
}


/**
 * @description 按照 code 精确查找
 *
 * @param {string} code code
 * @returns
 */
function findCodeTag(code) {

    let sql = `SELECT * FROM all_tag WHERE code='${code}'`;
    return query(sql);
};

/**
 * @description 添加新的标签
 *
 * @param {string} name  名称
 * @param {string} code  code
 * @param {string} moment 创建时间
 * @param {string} description 简单描述
 * @param {number} use_count 使用次数
 * @returns
 */
function addTag(name, code, moment, description, use_count) {

    let sql =
        `INSERT INTO all_tag
        (name, code, moment, description, use_count)
        VALUES
        ('${name}', '${code}', '${moment}', '${description}', ${use_count})`

        return query(sql)
}



/**
 * @description 删除指定的标签
 *
 * @param {number} id id
 * @returns
 */
function deleteTag(id) {

    let sql = `DELETE FROM all_Tag WHERE id=${id}`;

    return query(sql);
}

/**
 * @description 更新或修改标签
 *
 * @param {number} id 标识
 * @param {string} name 名称
 * @param {string} code code
 * @param {string} moment 创建时间
 * @param {string} description 简单描述
 * @param {number} use_count 使用次数
 * @returns
 */
function updateTag(id, name, code, moment, description, use_count) {

    let sql =
        `UPDATE all_tag SET
        name='${name}',
        code='${code}',
        moment='${moment}',
        description='${description}',
        use_count='${use_count}'
        WHERE id=${id}`;

    return query(sql);
}




module.exports = {
    getAllTag,
    findTag,
    findNameTag,
    findCodeTag,
    addTag,
    deleteTag,
    updateTag
}
