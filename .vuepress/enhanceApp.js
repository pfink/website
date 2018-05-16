export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    if (typeof window !== 'undefined') {
      const Headroom = require('headroom.js')
      Vue.prototype.Headroom = Headroom

      const ScrollReveal = require('scrollreveal')
      Vue.prototype.$sr = new ScrollReveal()

    }
  }
