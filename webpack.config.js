const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/src/index.js' ),
  output: {
    path: path.resolve(path.resolve(__dirname, './client/dist')),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, //what files needs to be compiled by checking the file types
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', `@babel/preset-react`],// presets you want to use 
          }
        }
      },
      {
        test:/\.css$/i,
        use: ["style-loader", "css-loader" ], // loading styles in your server 
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'client/public'),
    port: 8080,
    hot: true,
    historyApiFallback: true
    },
    proxy: {
      // Added back /api here to ensure that only requests to /api are sent to back end. All front-end requests must be handled by react routers
      '/api':'http://localhost:3000',

    compress: true,
    port: 7070,
    // This is a nevessary setting to ensure new front-end requests go to react routers
    historyApiFallback: true
  // },
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './client/index.html')
  })]  
}