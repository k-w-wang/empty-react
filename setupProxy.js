const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
    console.log(app);
    app.use('/index',createProxyMiddleware({
        target:'https://www.bilibili.com',
        changeOrigin:true,
    }))
};