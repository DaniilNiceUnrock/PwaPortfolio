// vue.config.js
module.exports = {
  devServer: {
    port: 3000,
    proxy: 'https://rest.ponomarevdaniil.fun"'
   //proxy: {
      //'^/api': {
        //target: "http://rest.ponomarevdaniil.fun",
        /*target: "http://104.198.229.231",*/
        /*target: "https://ponomarevdaniil.fun",*/
        //ws: true,
        //secure:false,
       // changeOrigin: true,
       
     // }
   // }
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
  