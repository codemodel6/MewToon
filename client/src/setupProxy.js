const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://korea-webtoon-api.herokuapp.com",
      changeOrigin: true,
    })
  );
};
