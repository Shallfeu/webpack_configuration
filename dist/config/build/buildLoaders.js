import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export var buildLoaders = function (options) {
    var isDev = options.mode === 'development';
    var svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };
    var assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var cssLoader = {
        loader: 'css-loader',
        options: { modules: { localIdentName: isDev ? '[path][name]__[local]' : 'hash:base64:8' } },
    };
    var sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoader, 'sass-loader'],
    };
    var tsLoader = {
        test: /\.tsx?$/,
        use: { loader: 'ts-loader', options: { transpileOnly: true } },
        exclude: /node_modules/,
    };
    return [svgrLoader, assetsLoader, sassLoader, tsLoader];
};
