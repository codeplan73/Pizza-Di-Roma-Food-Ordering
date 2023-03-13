const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1/meals',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      // add the following options to enable CORS
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      }
    })
  );
};
