<template>
  <div>
    <PaymentInfo :receiverAddress="receiverAddress"/>
    <b-button type="is-primary" size="is-large" @click="back()">Back</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import BigNumber from 'bignumber.js'
import PaymentInfo from '@/components/PaymentInfo'
import Footer from '@/components/Footer'
import config from '@/config.json'
import axios from 'axios'

export default {
  name: 'checkout',
  components: {
    PaymentInfo,
    Footer
  },
  data () {
    return {
      receiverAddress: '',
      checkBalanceInterval: null,
      checkEveryMs: 2000
    }
  },
  async mounted () {
    const walelt = await this.createMerchantWallet()
    this.receiverAddress = walelt.address
    this.checkBalanceInterval = setInterval(this.checkBalance, this.checkEveryMs)
  },
  beforeDestroy () {
    clearInterval(this.checkBalanceInterval)
  },
  computed: {
    ...mapState({
      total: state => state.total
    })
  },
  methods: {
    ...mapActions({
      updateTotal: 'updateTotal'
    }),
    async checkBalance () {
      console.log(`checking balance ${this.receiverAddress}`)
      const { data } = await axios.post(config.api + '/getBalance', { address: this.receiverAddress })
      console.log('user balance', data.balance, 'target amount', this.total.toString(10))
      if (BigNumber(data.balance).gte(this.total)) {
        this.updateTotal(BigNumber(0))
        clearInterval(this.checkBalanceInterval)
        this.$router.push({ name: 'ThankYou', query: { amountReceived: BigNumber(data.balance) } })
      }
    },
    async createMerchantWallet () {
      const { data } = await axios.post(config.api + '/createWallet', { minting: false })
      console.log(JSON.stringify(data))
      return data
    },
    back () {
      this.updateTotal(BigNumber(0))
      this.$router.push({ name: 'Merchant' })
    }
  }
}
</script>
