const { createProxyMiddleware } = require('http-proxy-middleware'); //需要安装中间件
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api',{
            target: 'https://geminglu.cn:3001', // 要代理的地址
            changeOrigin: true, // 开启代理
        })
    );
};