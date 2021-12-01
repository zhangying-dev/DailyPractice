<!--
 * @Author: Ying Zhang
 * @Date: 2021-12-01 16:59:51
 * @LastEditTime: 2021-12-01 17:00:55
 * @LastEditors: Ying Zhang
 * @Description:
 * @FilePath: /everyday/vue项目打包部署/打包部署前/CORS.md
 * 道阻且长，行则将至
-->

# 跨源资源共享（CORS）

> 如果前端静态内容是部署在与后端 API 不同的域名上，需要适当地配置 CORS。

[跨源资源共享 (CORS)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS) （或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其它 origin（域，协议和端口），这样浏览器可以访问加载这些资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的"预检"请求。在预检中，浏览器发送的头中标示有 HTTP 方法和真实请求中会用到的头。

跨源 HTTP 请求的一个例子：运行在 http://domain-a.com 的 JavaScript 代码使用 XMLHttpRequest 来发起一个到 https://domain-b.com/data.json 的请求。

出于安全性，浏览器限制脚本内发起的跨源 HTTP 请求。 例如，XMLHttpRequest 和 Fetch API 遵循同源策略。 这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非响应报文包含了正确 CORS 响应头。
