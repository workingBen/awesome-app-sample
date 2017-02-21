module.exports = {
  cache: {
    cacheId: "awesome-app-sample",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "awesome-app-sample",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
