let baseUrl

//process.env.NODE_ENV是从nodejs环境中获取参数
switch (process.env.NODE_ENV) {
    case 'devlopment':
        baseUrl = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseUrl = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'prod':
        baseUrl = 'http://mall-pre.springboot.cn/api'
        break;
    default:
        baseUrl = 'http://mall-pre.springboot.cn/api'
        break;
}

export default{
    baseUrl
}