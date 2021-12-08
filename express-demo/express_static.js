/*
 * @Author: Ying Zhang
 * @Date: 2021-12-08 10:56:56
 * @LastEditTime: 2021-12-08 11:16:45
 * @LastEditors: Ying Zhang
 * @Description: 静态文件 内置的中间件 express.static 来设置静态文件
 * @FilePath: /express-demo/demo3.js
 * 道阻且长，行则将至
 */
var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));
//图片访问 http://localhost:8081/public/img/hand.png
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
