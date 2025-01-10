module.exports = {
  publicPath: './',
  outputDir: (process.env.NODE_ENV === 'production') ? 'dist' : 'docs',
  productionSourceMap: false,
  css: { extract: false }
}
