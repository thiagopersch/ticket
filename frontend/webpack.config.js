const webpack = require('webpack');

module.exports = {
  mode: 'development', // ou 'production', dependendo do ambiente
  entry: './src/index.js', // ponto de entrada da aplicação
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // pasta de saída
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,  // fs não pode ser usado no navegador
      "crypto": require.resolve("crypto-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
};
