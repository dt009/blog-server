
const Router = require('koa-router');

let test = new Router();

test.get('/test', async ctx => {
    ctx.body = {
        name: 111,
        age: 22,
        sex: 2,
        hobby: [1, 2, 4, 5]
    }
});

test.post('/test-post', async ctx => {
    let a = ctx.request.body;
    ctx.body = {
        name: 111,
        age: 22,
        sex: 2,
        hobby: [1, 2, 4, 5]
    }

})

module.exports = test;
