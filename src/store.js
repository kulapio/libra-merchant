import Vue from 'vue'
import Vuex from 'vuex'
import BigNumber from 'bignumber.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAddress: '',
    userAddressShort: '',
    balance: '',
    mnemonic: '',
    toAddress: '',
    total: BigNumber('120')
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
    }
  }
})
