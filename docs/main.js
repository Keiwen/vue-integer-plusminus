import Vue from 'vue'

import MainView from './views/Main'

new Vue({
  components: {
    MainView
  },

  mounted () {
    this.$el.className = 'loaded'
  }
}).$mount('#app')
