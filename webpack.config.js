const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const root = process.cwd();
const paths = {
  build: path.resolve(root, 'build'),
  entry: path.resolve(root, 'src/index.js'),
  srcDir: path.resolve(root, 'src'),
  appHtml: path.resolve(root, 'public/index.html'),
  swDest: path.resolve(root, 'build/sw.js')
};

const PROD = process.env.NODE_ENV === 'production';

const vendorFiles = [
  'react',
  'react-redux',
  'redux',
  'react-dom',
  'react-router',
  'redux-thunk'
];

const sharedPlugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    __PROD__: PROD,
    __DEV__: !PROD
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: paths.appHtml,
    alwaysWriteToDisk: true
  }),
  new HtmlWebpackHarddiskPlugin(),
  new PreloadWebpackPlugin({
    rel: 'prefetch'
  })
];
let plugins;

if (PROD) {
  plugins = [
    ...sharedPlugins,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new ManifestPlugin(),
    new WorkboxPlugin({
      globDirectory: paths.build,
      globPatterns: ['**/*.{html,js}'],
      swDest: paths.swDest,
      clientsClaim: true,
      skipWaiting: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ];
} else {
  plugins = [
    ...sharedPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new AutoDllPlugin({
      inject: true,
      filename: '[name].dll.js',
      entry: {
        vendor: vendorFiles
      }
    })
  ];
}

const output = {
  path: paths.build,
  filename: '[name].[hash].js',
  publicPath: '/static/',
  chunkFilename: '[name].[hash].js'
};

const entry = {
  app: ['babel-polyfill', paths.entry]
};

if (PROD) {
  entry.vendor = vendorFiles;
}

module.exports = {
  entry,
  output,
  plugins,
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: paths.build,
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
};
