const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (api, projectOptions) => {
    const development = process.env.NODE_ENV !== 'production';

    if(development) {
        const options = (projectOptions.pluginOptions || {}).webpackBundleAnalyzer || {};
        console.log(options);

        api.chainWebpack(webpackConfig => {
            webpackConfig
                .plugin("webpack-bundle-analyzer")
                .use(BundleAnalyzerPlugin)
                .init(Plugin => new Plugin(options));
        });
    }
};