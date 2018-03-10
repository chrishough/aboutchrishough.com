"use strict";
// https://zacky1972.github.io/tech/2017/11/29/03-middleman-bootstrap.html
// https://github.com/toadle/middleman-webpack
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const outputPath = path.join(__dirname, "build/assets");

module.exports = {
  entry: {
    site: [
      path.join(__dirname, "/source/assets/stylesheets/site.scss"),
      path.join(__dirname, "/source/assets/javascripts/site.js")
    ]
  },

  output: {
    path: outputPath,
    filename: '[name]-[hash].js',
    publicPath: '/assets/'
  },

  resolve: {
    modules: [
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /(assets)/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              name: "[name]-[hash].[ext]",
              publicPath: '/assets/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico|jpg|jpeg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: "[name]-[hash].[ext]",
              publicPath: '/assets/'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].css',
              publicPath: '/assets/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules/bootstrap/scss'),
              ],
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ManifestPlugin({
      fileName: 'rev-manifest.json'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CleanWebpackPlugin([outputPath], {
      root: __dirname
    })
  ]
};
