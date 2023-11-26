import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolver';
import { buildDevServer } from './buildDevServer';
export var buildWebpack = function (options) {
    var mode = options.mode, paths = options.paths, port = options.port;
    var isDev = mode === 'development';
    var config = {
        mode: mode !== null && mode !== void 0 ? mode : 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: buildDevServer(options),
    };
    return config;
};
