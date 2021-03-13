const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
      $: 'jquery/src/jquery',
      JQuery: 'jquery/src/jquery',
      Popper: ['popper.js', 'default']
  })
)

module.exports = environment
