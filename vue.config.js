module.exports = {
    devServer: {
        host: '0.0.0.0',
        // port: 8080,
        /*代理*/
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',    //目标服务器 host
                changeOrigin: true,     //默认false，是否需要改变原始主机头为目标URL
                pathRewrite: {
                    '/api': ''     // 重写请求，比如我们源访问的是/api，那么请求会被解析为空
                },
            }
        }
    },
    // publicPath:'/app',       //每个文件都加一个前缀/app
    // outputDir:'dist',        //打包的文件夹名称
    // indexPath:'index2.html',     //单页面命名
    // lintOnSave:false,        //关闭eslint
    productionSourceMap: false,   //关闭生成map文件，js源码都在map文件中，这个既考虑到了安全，打包的时候也优化了性能
    //删除预加载，做到真正的按需加载
    chainWebpack: (config)=>{
        config.plugins.delete('prefetch')
    }
}

