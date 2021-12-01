// vue.config.js
module.exports = {
  devServer: {
    proxy: 'http://104.198.229.231/',
},
    runtimeCompiler: true,
    
    css: {
      loaderOptions: {
        scss: {
            prependData: `@import "~@/assets/_variables.scss";`
        },
        
      }
    },
    pwa: {
      name: 'Daniil_Ponomarev',
      themeColor: '#000',
      msTileColor: '#000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  }
  