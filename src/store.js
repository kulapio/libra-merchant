import Vue from 'vue'
import Vuex from 'vuex'
import BigNumber from 'bignumber.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    userAddress: '',
    userAddressShort: '',
    balance: '',
    mnemonic: '',
    toAddress: '',
    total: BigNumber('0')
  },
  actions: {
    updateUserData ({ commit }, { userAddress, userAddressShort, balance, mnemonic }) {
      commit('updateUserData', { userAddress, userAddressShort, balance, mnemonic })
    },
    updateBalance ({ commit }, balance) {
      commit('updateBalance', balance)
    },
    updateUserAddress ({ commit }, address) {
      commit('updateUserAddress', address)
    },
    updateTotal ({ commit }, newTotal) {
      commit('updateTotal', newTotal)
    },
    addItem ({ commit }, item) {
      commit('addItem', item)
    },
    clearItems ({ commit }) {
      commit('clearItems')
    }
  },
  mutations: {
    updateUserData (state, { userAddress, userAddressShort, balance, mnemonic }) {
      state.userAddress = userAddress
      state.userAddressShort = userAddressShort
      state.balance = balance
      state.mnemonic = mnemonic
    },
    updateBalance (state, payload) {
      state.balance = payload
    },
    updateUserAddress (state, payload) {
      state.userAddress = payload
    },
    updateTotal (state, payload) {
      state.total = payload
    },
    addItem (state, item) {
      const i = state.items.findIndex(it => it.title === item.title)
      if (state.items.length && i !== -1) {
        const newItem = state.items[i]
        newItem.amount++
        Vue.set(state.items, i, newItem)
      } else {
        state.items.push({ ...item, amount: 1 })
      }
    },
    clearItems (state) {
      state.items = []
      state.total = BigNumber('0')
    }
  }
})
