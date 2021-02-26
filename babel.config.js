module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.md$/,
        loader: 'vue-loader!vue-md-loader'
      }
    ]
  }
}