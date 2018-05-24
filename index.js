const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (api, projectOptions) => {
    api.chainWebpack(webpackConfig => {
        webpackConfig
            .plugin("webpack-bundle-analyzer")
            .use(BundleAnalyzerPlugin);
    });
};