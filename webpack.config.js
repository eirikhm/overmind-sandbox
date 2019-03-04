const path = require('path')
const webpack = require('webpack');


module.exports = (env, args) => {

  const isProduction = args.mode === 'production'
  return {
  
    devtool: 'inline-source-map',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      publicPath: '/',
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [
      

      new webpack.ProvidePlugin({
        "React": "react",
      }),
      

    ],  
    optimization: Object.assign(
      {
        splitChunks: {
          chunks: 'all',
        },
      },
    ),
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ]
        },

      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  }
}

