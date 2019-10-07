const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const defaultDevelopmentOptions = {};
const defaultProductionOptions = {
  analyzerMode: "static"
};

module.exports = (api, projectOptions) => {
  const development = process.env.NODE_ENV !== "production";

  const options =
    (projectOptions.pluginOptions || {}).webpackBundleAnalyzer || {};

  const mergedOptions = Object.assign(
    development ? defaultDevelopmentOptions : defaultProductionOptions,
    options
  );

  api.chainWebpack(webpackConfig => {
    if(process.env.VUE_CLI_MODERN_MODE === "true") {
      const isModernBuild = process.env.VUE_CLI_MODERN_BUILD === "true";
      const normalizedReportFilename = mergedOptions.reportFilename || "report.html";
      const pathParts = normalizedReportFilename.split( '/' );
      const reportFilename = pathParts.pop();
      const path = ( pathParts.length > 0 ? pathParts.join( '/' ) + '/' : '');
      mergedOptions.reportFilename = path + (isModernBuild ? "modern-" : "legacy-") + reportFilename;
    }

    webpackConfig
      .plugin("webpack-bundle-analyzer")
      .use(BundleAnalyzerPlugin)
      .init(Plugin => new Plugin(mergedOptions));
  });
};
