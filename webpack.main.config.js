const path = require('path')
const { IgnorePlugin } = require('webpack');
const rules = require('./webpack.rules')

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules ,
  },
  plugins: [
    new IgnorePlugin({ resourceRegExp: /^fsevents$/ }), // https://stackoverflow.com/questions/52125641/electronwebpack-module-not-found-error-cant-resolve-fsevents-fs-etc-in-cho/67829712#67829712
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json']
  },

};
