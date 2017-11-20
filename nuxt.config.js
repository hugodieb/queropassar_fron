const { join } = require('path')

const _isdev = process.env.npm_lifecycle_event == 'dev';
const _apimock = process.env.API_MOCK == '1' || (process.env.API_MOCK == undefined && _isdev)
const _apijs = _apimock ? 'apimock.js' : 'api.js';

console.log('_apimock = '+_apimock)

module.exports = {
  build: {
    vendor: ['vuetify', 'babel-polyfill', 'moment'],
    extend (config, context){
      home = config.resolve.alias['~'];
      config.resolve.alias['~apijs'] = home + '/components/api/' + _apijs;
    }
  },
  router: {
    middleware: ['fwdcookies', 'auth'],
  },
  plugins: [
    '~plugins/vuetify.js',
    '~plugins/filters.js',
    {src: '~plugins/vue2-filters', ssr: false},
  ].concat(_isdev ? [] : [
  ]),
  css: [
    { src: join(__dirname, 'css/app.styl'), lang: 'styl' },
    'assets/main.css'
  ],
  head: {
    title: 'mynuxtapp',
    script: [].concat(_isdev ? [] : [
      {src: 'https://cdn.ravenjs.com/3.17.0/vue/raven.min.js', crossorigin: 'anonymous'},
    ]),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta content' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
  },
  env: {
    API_MOCK: _apimock ? '1' : '0',
  }
}
