const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = createProxyMiddleware;
module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'https://newerafront.wjtest.chinamcloud.cn/v1/',
    pathRewrite: {'^/api': ''},
    changeOrigin: true }));
};