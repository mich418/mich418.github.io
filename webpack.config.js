const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { version } = require('./package.json')

module.exports = function(env) {
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
        {
          test: /\.md$/i,
          type: 'asset/source'
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: `mihau.co (v${version})`
      }),
      new MiniCssExtractPlugin(),
      new ESLintPlugin({
        extensions: ['js', 'ts'],
        fix: !!env.fix
      }),
      new StylelintPlugin({
        fix: !!env.fix
      })
    ],
    devServer: {
      static: './dist',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  }
}