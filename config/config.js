/*
 * @Author: duantao-ds
 * @Date: 2018-08-24 11:32:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-12 15:35:40
 */

const os = require('os');

let hostname = os.hostname;

let config;

if (hostname === 'instance-lfnr0pzg') {
    config = {
        serverPort: '8080',
        database: {
            DATABASE: 'blog_sql',
            USERNAME: 'root',
            PASSWORD: 'Iamdt@009',
            HOST: 'localhost',
            PORT: '3306'
        }
    }

}
else {
    config = {
        serverPort: '8080',
        database: {
            DATABASE: 'blog_sql',
            USERNAME: 'root',
            PASSWORD: 'root',
            HOST: 'localhost',
            PORT: '3306'
        }
    }
}

module.exports = config;
