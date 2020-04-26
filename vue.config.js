module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        /*代理*/
        proxy:{
            '/api':{
                target: 'http://mall-pre.springboot.cn',    //目标服务器 host
                changeOrigin: true,     //默认false，是否需要改变原始主机头为目标URL
                pathRewrite: {
                    '/api':''     // 重写请求，比如我们源访问的是/api，那么请求会被解析为空
                    },
            }
        }
    }
}