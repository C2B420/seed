module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        public: '@/../public',
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        './src/assets/style/variables.less',
        './src/assets/style/utilities.less',
      ],
    },
  },
};
