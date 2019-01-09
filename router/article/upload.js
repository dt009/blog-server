/*
 * @Author: duantao-ds
 * @Date: 2018-09-21 10:39:05
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-21 11:13:18
 */

const inspect = require('util').inspect;
const path = require('path');
const fs = require('fs');
const Busboy = require('busboy');
const moment = require('moment');

function uploadFile(ctx) {

    let {req, res} = ctx;

    // console.log(ctx.request.body.files.file);
    let busboy = new Busboy({headers: req.headers});

    let filePath = path.resolve(__dirname, '../../markdown');

    return new Promise((resolve, reject) => {
        console.log('文件上传中...');

        let result = {
            success: false
        };

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {

            let now = moment().valueOf();

            let fileName = `${filename}`;

            let _uploadFilePath = path.join(filePath, fileName);

            let saveTo = path.join(_uploadFilePath);

            file.pipe(fs.createWriteStream(saveTo));

            file.on('end', () => {
                result.success = true;
                result.message = '成功上传...';
                result.filename = fileName;
            })
        });

        busboy.on('finish', () => {
            console.log('文件上传结束...');
            resolve(result);
        });

        busboy.on('error', err => {
            console.log('文件上传出错...');
            reject(result);
        });

        req.pipe(busboy);
    })
}

module.exports = uploadFile;
