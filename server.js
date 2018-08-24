/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:26:10
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 11:50:14
 */

// node 原生模块引入

const path = require('path');

const fs = require('fs');

// 其他模块

const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors');
const config = require('./config/config');


// 实例化 服务 koa
const app = new Koa();

/**
 * @description cors 设置 仅限开发时使用 发布时需要注释
 * @type {TODO}
 * @param {正式放入服务器时要注释到整段代码}
 * */

app.use(cors({
    origin: function (ctx) {
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

/**
 * @description 静态资源设置
 */

app.use(static(
    path.resolve(__dirname, './static')
));

/**
 * @description ejs 模板的设置
 */

app.use(views(path.resolve(__dirname, './views'), {
    extension: 'ejs'
}));

/**
 * @description post 请求解析设置
 */

app.use(bodyparser());

/**
 * @description 路由
 */

app.use(require('./router/index').routes());


app.listen(config.serverPort);

console.log('服务启动: http://localhost:' + config.serverPort);
