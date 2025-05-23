import UrqlModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [UrqlModule],
  urql: {
    endpoint: 'http://',
  },
})
