import Vue from 'vue'
// make global in nuxt js
// this prototype can called in component in page directory by way this.$namePrototype(argument)
Vue.prototype.$myInjectedFunction = string =>
  console.log('This is an example', string)
