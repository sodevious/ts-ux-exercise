module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/_variables.scss";`
      },
    }
  }
};
