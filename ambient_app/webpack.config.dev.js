const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve('./'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: path.resolve('public/assets')
            }
          }
        ]
      },
      {
        test: /\.scss$|\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'REACT_APP_GOOGLE_CLIENT_ID',
      'REACT_APP_SERVER',
      'REACT_APP_FREESOUND_TOKEN'
    ])
  ]
};