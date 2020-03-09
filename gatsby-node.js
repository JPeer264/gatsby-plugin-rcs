const RcsWebpackPlugin = require('rcs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.onCreateWebpackConfig = ({ actions, stage }, options) => {
  if (
    stage !== 'build-javascript'
    && stage !== 'build-html'
  ) {
    return;
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
          ],
        },
      ],
    },
    plugins: [new RcsWebpackPlugin(options)],
  });
};
