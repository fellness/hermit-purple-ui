const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/graphql',
    proxy({
      target: 'http://127.0.0.1:4040',
      changeOrigin: true,
      pathRewrite: {
        '^/graphql': '/', // rewrite path
      },
    }),
  );
};