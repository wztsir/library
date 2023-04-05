const { NONAME } = require('dns');

module.exports = {
  // 基本路径
  
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
   // 是否使用css分离插件 ExtractTextPlugin
   extract: true,
   // 开启 CSS source maps?
   sourceMap: false,
   // css预设器配置项
   loaderOptions: {},
   // 启用 CSS modules for all css / pre-processor files.
   
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode

  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
   open: process.platform === 'darwin',
   host: '0.0.0.0',
   port: 12345,
   https: false,
   
   proxy:{
    '/api': {
      target: 'https://101.35.181.143', // 注意！此处为后端提供的真实接口
      changeOrigin: true, // 允许跨域
      pathRewrite: {
        // 如果接口中是没有api的，那就直接置空，'^/api': ''，
        // 如果接口中有api，那就得写成{'^/api':'/api'}
        '^/api': '/api'
      }

   }
  },
  
  },
  // 第三方插件配置
 
 }
  
 