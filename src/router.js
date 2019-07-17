import Vue from 'vue'
import Router from 'vue-router'
import Send from './views/Send'
import Receive from './views/Receive'
import ScanQR from './views/ScanQR'
import Stats from './views/Stats'
import Merchant from './views/Merchant'
import Checkout from './views/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Merchant',
      component: Merchant
    },
    {
      path: '/send',
      name: 'Send',
      component: Send
    },
    {
      path: '/receive',
      name: 'Receive',
      component: Receive
    },
    {
      path: '/scanQR',
      name: 'ScanQR',
      component: ScanQR
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/blog',
      name: 'Blog',
      beforeEnter () { location.href = 'https://medium.com/kulapofficial/the-first-libra-wallet-poc-building-your-own-wallet-and-apis-3cb578c0bd52' }
    }
  ]
})
