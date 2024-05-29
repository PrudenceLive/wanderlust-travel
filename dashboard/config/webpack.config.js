const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // Module rules for different file types
  module: {
    rules: [
      {
        // JavaScript and JSX files
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // CSS files
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        // Images and other assets
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        // Fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },

  // Resolve extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Plugins configuration
  plugins: [
    // Cleans the dist folder before each build
    new CleanWebpackPlugin(),

    // Generates an index.html file and injects the bundle
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  // Dev server configuration
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
