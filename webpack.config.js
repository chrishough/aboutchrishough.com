"use strict";

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require("webpack-manifest-plugin");
const outputPath = path.join(__dirname, "build/assets");


const uglifyJsPluginConfig = new UglifyJsPlugin({
  sourceMap: true,
  uglifyOptions: {
    ecma: 8,
    compress: false,
    mangle: false,
    keep_fnames: true,
    output: {
      comments: true,
      beautify: true,
      indent_level: 2,
      indent_start: 0
    }
  }
});


const siteConfig = {
  entry: {
    vendor: [
      path.join(__dirname, "/source/assets/javascripts/vendor.js")
    ],
    site: [
      path.join(__dirname, "/source/assets/javascripts/site.js"),
      path.join(__dirname, "/source/assets/stylesheets/site.scss")
    ]
  },

  output: {
    path: outputPath,
    filename: "site-[hash].js"
  },

  resolve: {
    modules: [
      "node_modules",
      "source/assets/javascripts/vendor"
    ],
    alias: {
      "fontawesome": "fontawesome",
      "jquery": "jquery/src/jquery.js"
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /(assets)/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              name: "[name]-[hash].[ext]",
              publicPath: "/assets/"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico|jpg|jpeg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
              name: "[name]-[hash].[ext]",
              publicPath: "/assets/"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash].css",
              publicPath: "/assets/"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: function () {
                return [
                  require("autoprefixer")
                ];
              }
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, "node_modules")
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "site-vendor-[hash].js",
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: "site-manifest.json"
    }),
    new CleanWebpackPlugin([outputPath], {
      root: __dirname,
      verbose: false
    }),uglifyJsPluginConfig
  ]
};

module.exports = [siteConfig]
