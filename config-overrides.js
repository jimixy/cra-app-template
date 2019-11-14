const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const {
  override,
  addWebpackPlugin,
  addBabelPlugins,
  addLessLoader,
  addPostcssPlugins,
  useEslintRc
} = require('customize-cra')

module.exports = override(
  addBabelPlugins('react-hot-loader/babel', [
    'styled-jsx/babel',
    {
      plugins: ['styled-jsx-plugin-postcss']
    }
  ]),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]'
  }),
  addPostcssPlugins([
    require('autoprefixer')(),
    require('postcss-aspect-ratio-mini')({}),
    require('postcss-px-to-viewport')({
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    })
  ]),
  addWebpackPlugin(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)),
  addWebpackPlugin(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/)),
  addWebpackPlugin(
    new ProgressBarPlugin({
      format: '  build [:msg] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    })
  ),
  useEslintRc(path.resolve(__dirname, '.eslintrc'))
)
