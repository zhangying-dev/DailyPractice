/*
 * @Author: Ying Zhang
 * @Date: 2021-12-08 11:33:40
 * @LastEditTime: 2021-12-08 11:33:41
 * @LastEditors: Ying Zhang
 * @Description: Cookie 管理
 * @FilePath: /express-demo/express_cookie.js
 * 道阻且长，行则将至
 */
var express = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
})
 
app.listen(8081)
