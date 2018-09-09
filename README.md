# vue-cli-plugin-webpack-bundle-analyzer

> vue-cli plugin to visualize size of webpack output files

Uses [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to create an interactive treemap visualization of the contents of all your bundles.

![webpack bundle analyzer zoomable treemap](https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif)

## Configuration

Add a `webpackBundleAnalyzer` object to your `pluginOptions` in `vue.config.js`:

```js
module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
};
```

You can use any of [these](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin) settings.

## Production

When building your Vue project for production, the `analyzerMode` will be set to `static`. By default, the generated web page will be opened in your browser. This can be changed by setting `openAnalyzer` to `false` as shown above.

## Known Caveats

In development, you'll only be able to use the `stat` size due to `webpack-bundle-analyzer` requiring physical files to calculate `parsed` and `gzipped` sizes.

## Installing in an Already Created Project

```sh
vue add webpack-bundle-analyzer
```

## Injected webpack-chain Rule

```js
config
  .plugin("webpack-bundle-analyzer")
  .use(BundleAnalyzerPlugin)
  .init(Plugin => new Plugin(options));
```
