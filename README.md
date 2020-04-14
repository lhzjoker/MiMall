# MiMall
Vue全家桶实战模仿小米商城 从零独立开发企业级电商系统（前端）

## 项目准备工作

### 开发工具
* 安装Git和Node（安装最新版本即可），我的git版本为12.14.0，Node版本为2.24.1
* 开发工具为vscode
* vscode需要安装一些插件：Git History Diff（查看提交记录），vue
* vue-cli4.0安装及应用生成，vue-cli4.0是一个脚手架，作用是创建一个初始化的Vue项目
    * 安装vue-cli：cnpm i -g @vue/cli（一般会下载最新版本）
    * 创建项目：vue create + 项目名
    * 默认babel，eslint自动安装

### vue-cli的使用
* 进入文件，启动：cnpm run serve
* 使用脚手架的界面ui功能：vue ui，这是脚手架内置的一套可视化的系统，（vue项目管理器，需要导入项目，或者创建项目）
* 安装一些依赖插件：axios，vue-router，vuex


## 前端跨域
* 跨域是浏览器为了安全而做出的限制策略
* 在前端领域中，跨域是指浏览器允许向服务器发送跨域请求，从而克服Ajax只能同源使用的限制。
* 浏览器请求必须遵循同源策略：同域名，同协议，同端口
* 同源策略限制以下几种行为：
    * Cookie、LocalStorage 和 IndexDB 无法读取
    * DOM和JS对象无法获得
    * AJAX 请求不能发送
* CORS跨域
    * CORS跨域-服务端设置，前端直接调用
    * 说明：后端允许前端某个站点进行访问
    * cors跨域的使用：
        * 下载插件： cnpm i axios --save-dev
        * 导入：import axios from 'axios'
        * 发送请求
        


                /* 发送请求，用axios.get的方式 */
          mounted(){
            /* 一个供我们调用的接口 */
            let url = 'https://www.easy-mock.com/mock/5e946a99253ff9711a3c5f31/example/query'
            /* promise结构 */
            axios.get(url).then(()=>{
              
            })
          }


* JSONP跨域
* jsonp的原理就是利用<script>标签没有跨域限制，通过<script>标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。
    * JSONP跨域-前端适配，后台配合
    * 说明：前后台同时改造
    * jsonp的缺点：只能发送get一种请求
    * cors跨域的使用：
        * 下载插件： cnpm i jsonp --save-dev
        * 导入：import jsonp from 'jsonp'
        * 大家可以把jsonp看成不是一个请求（假请求），只是一个js脚本
        * 发送请求
        


                /* 发送请求，用axios.get的方式 */
          mounted(){
            /* 一个供我们调用的接口 */
            let url = 'https://fanyi.baidu.com/langdetect'
            /*jsonp结构，中间是option参数，没有可以不传
            jsonp(url,{},(err,res)=>{
                
            })
            */
          }



* 代理跨域
    * 接口代理-通过修改nginx服务器配置来实现
    * 说明：前端修改，后台不动
    * 原理：服务器访问服务器没有跨域问题.所以,我们的做法是利用中间的代理浏览器向目标浏览器发请求.


## 目录结构
public --- 存放一些公共资源，比如大图片等
resource --- 一些打包的资源，供我们使用
src --- 
    |- api --- 承载整个项目的api请求
    |- assets --- 存放一些图片（小图片，icon等）
    |- components --- 程序封装的组件 
    |- util --- 一些公共的方法
    |- storage --- 数据存储，缓存
    |- store --- vuex
    |- App.vue --- 根组件
    |- router.js --- 路由文件
    |- pages --- 页面
        |- index.vue --- 首页
        |- home.vue --- 包含头部和尾部，这样就不用到每个页面都写了
        |- product.vue --- 产品
        |- detail.vue --- 商品详情 
        |- orderList.vue --- 订单
        |- orderConfirm.vue --- 订单确认 
        |- cart.vue --- 购物车 
        |- orderPay.vue --- 支付页面
        |- login.vue --- 登陆页面 
        |- alipay.vue --- 支付页面跳转到支付宝的中转页面