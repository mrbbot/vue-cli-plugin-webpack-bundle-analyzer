# vue-cli-plugin-webpack-bundle-analyzer

> vue-cli plugin to visualize size of webpack output files

Uses [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to create  an interactive treemap visualization of the contents of all your bundles.

![webpack bundle analyzer zoomable treemap](https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif)

## Installing in an Already Created Project

``` sh
vue add webpack-bundle-analyzer
```

## Injected webpack-chain Rules

- `config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin)`