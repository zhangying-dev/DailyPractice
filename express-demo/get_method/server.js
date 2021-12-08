/*
 * @Author: Ying Zhang
 * @Date: 2021-12-08 11:18:59
 * @LastEditTime: 2021-12-08 11:19:31
 * @LastEditors: Ying Zhang
 * @Description: 
 * @FilePath: /express-demo/get_method/server.js
 * 道阻且长，行则将至
 */
var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
