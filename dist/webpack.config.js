import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';
export default (function (env) {
    var _a, _b, _c;
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    var config = buildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 3000,
        paths: paths,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : 'development',
        platform: (_c = env.platform) !== null && _c !== void 0 ? _c : 'desktop',
        analyzer: env.analyzer,
    });
    return config;
});
