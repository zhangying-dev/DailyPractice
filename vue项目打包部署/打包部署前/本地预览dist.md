<!--
 * @Author: Ying Zhang
 * @Date: 2021-12-01 15:39:04
 * @LastEditTime: 2021-12-01 17:02:37
 * @LastEditors: Ying Zhang
 * @Description:
 * @FilePath: /everyday/vue项目打包部署/打包部署前/本地预览dist.md
 * 道阻且长，行则将至
-->

# 本地预览 dist

1. dist 目录需要启动一个 HTTP 服务器来访问 (除非你已经将 publicPath 配置为了一个相对的值)，所以以 file:// 协议直接打开 dist/index.html 是不会工作的。在本地预览生产环境构建最简单的方式就是使用一个 Node.js 静态文件服务器，例如 [serve](https://github.com/vercel/serve)：

   - npm install -g serve
   - # -s 参数的意思是将其架设在 Single-Page Application 模式下
   - # 这个模式会处理即将提到的路由问题
   - serve -s dist

2. [利用 http-server 预览打包后的项目](https://blog.csdn.net/qq_33718889/article/details/88725525?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf)

   1. 需要安装 http-server 通过 npm install -g http-server 进行全局安装
   2. 通过命令行进入到 dist 文件夹 运行 http-server
   3. 在浏览器输入上述地址就可以访问了

3. [本地搭建服务器](https://blog.csdn.net/qq_22713201/article/details/95630246)

   1. 搭建 express 本地服务器
   2. 使用 nginx 本地服务器运行
