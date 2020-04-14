## vue-swiper API文档
https://www.swiper.com.cn/api/index.html

## 跨域的几种实现方式

1. nginx代理
这种方式本地和线上的开发方式都比较简单；本地不需要添加.env.dev和.env.prod配置，以及config.js文件，只需要关系vue.config.js然后做环境地阿里即可；不同的环境，设置不同的代理域名

2. CORS解决跨域
这种方式不需要配置nginx；但是本地需要维护多套环境，根据process.env.NODE_DEV来切换开发和线上环境地址；config中做切换；

线上nginx配置：
location /api/ {
  proxy_pass http://mall-pre.springboot.cn/;
}
线上nginx配置的时候，代理域名后面需要加/,这样在请求的时候会去掉/api，否则请求的时候会包含/api

## 申请加入蓝湖查看小米商城设计稿
在问答区或者课程qq群里进行申请，并附上邮箱地址，前提是必须注册蓝湖帐号

## swiper中文文档
https://www.swiper.com.cn/

## Css3动画库
https://daneden.github.io/animate.css/

## 微信扫码支付开发文档
https://pay.weixin.qq.com/wiki/doc/api/index.html

https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_5

## 项目部署说明

1. 登录服务器
ssh root@ip
如何连接不成功，请绑定密钥对，通过ssh -i 密钥路径  root@ip访问；
2. 进入到服务器根目录
cd /

3. 下载软件安装包
a. rpm
b. apt-get可以用于运作deb包，例如在Ubuntu系统上对某个软件的管理：
安装：apt-get install
卸载：apt-get remove
更新：apt-get update

c.yum可以用于运作rpm包,类似仓库。如对包的管理操作：
安装：yum install
卸载：yum remove
更新：yum update

d.wget + 下载链接
Nodejs: wget https://npm.taobao.org/mirrors/node/v12.14.0/node-v12.14.0-linux-x64.tar.xz

SFTP安装：
参考百度云文档：https://cloud.baidu.com/doc/BCC/s/ljxlpwkwv

解压缩文件：
tar -zxvf 压缩文件名.tar.gz
tar -xvf 压缩文件名.tar

# nginx编译如果报错，需要安装编译器
yum install gcc gcc-c++ glibc -y        
yum install pcre-devel zlib-devel openssl-devel –y
# 指定安装路径
./configure --prefix=/usr/local/bin/nginx

4. 配置环境变量
ln -s /soft/node-v12.14.0/bin/node /usr/local/bin/node
ln -s /soft/node-v12.14.0/bin/npm /usr/local/bin/npm

