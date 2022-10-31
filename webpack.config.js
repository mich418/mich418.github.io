const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { version } = require('./package.json')

module.exports = function(env) {
  console.log(env.prod)
  return {
    mode: env.prod ? 'production' : 'development',
    devtool: env.prod ? 'source-map' : 'inline-source-map',
    entry: './src/index.ts',
    output: {
      filename: 'mkinfo.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: `mihau.co (v${version})`
      }),
      new MiniCssExtractPlugin()
    ],
    devServer: {
      static: './dist',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  }
}