const rules = require('./webpack.rules');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

rules.push(
    {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader",
            'postcss-loader',
        ],
    },
    {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        ]
    },
    {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
            name: 'images/[name].[ext]'
        }
    }
);

module.exports = {
    module: {
        rules,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
    },
};
