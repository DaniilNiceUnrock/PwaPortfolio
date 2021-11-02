// vue.config.js
module.exports = {

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
  