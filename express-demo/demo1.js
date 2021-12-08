/*
 * @Author: Ying Zhang
 * @Date: 2021-12-08 10:45:36
 * @LastEditTime: 2021-12-08 10:56:24
 * @LastEditors: Ying Zhang
 * @Description: 实例
 * @FilePath: /express-demo/demo1.js
 * 道阻且长，行则将至
 */
var express = require('express');
var app = express();
console.log('app', app)
 
app.get('/index', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8090, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
