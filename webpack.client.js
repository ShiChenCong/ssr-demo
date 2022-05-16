const path = require('path');

module.exports = {
  entry: './client/index.js',
  cache: {
    type: 'filesystem',
    // cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  output: {
    publicPath: './client/',
    filename: 'index.js',
    path: path.resolve(__dirname, 'build', 'client'),
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
  ],
};
