import htmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export var buildPlugins = function (options) {
    var isDev = options.mode === 'development';
    var plugins = [
        new htmlWebpackPlugin({ template: options.paths.html }),
        new DefinePlugin({ __PLATFORM__: JSON.stringify(options.platform) }),
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }
    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
};
