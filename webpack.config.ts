import { buildWebpack } from './config/build/buildWebpack';
import { Configuration } from 'webpack';
import { BuildPaths, BuildPlatform } from './config/build/types/types';
import path from 'path';

interface EnvVariables {
    port?: number;
    mode?: 'development' | 'production';
    platform?: BuildPlatform;
    analyzer?: boolean;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        public: path.resolve(__dirname, 'public'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: Configuration = buildWebpack({
        port: env.port ?? 3000,
        paths,
        mode: env.mode ?? 'development',
        platform: env.platform ?? 'desktop',
        analyzer: env.analyzer,
    });
    return config;
};
