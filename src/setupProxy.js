const { createProxyMiddleware } = require('http-proxy-middleware'); //需要安装中间件
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api',{
            target: 'https://geminglu.cn', // 要代理的地址
            changeOrigin: true, // 开启代理
        })
    );
    app.use(
        createProxyMiddleware('/hpb',{
            target: 'https://api.hongbeibang.com', // 要代理的地址
            changeOrigin: true, // 开启代理
            pathRewrite:{
                "^/hpb":""
            }
        })
    );
};