module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  transpileDependencies: [],
  chainWebpack: config => {
    config.module
      .rule('txt')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();

    // Enable source maps
    config.devtool('source-map');
  },
  productionSourceMap: true // Generate source maps for production
};

