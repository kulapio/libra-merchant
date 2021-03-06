<template>
  <div>
    <PaymentInfo :receiverAddress="receiverAddress"/>
    <div class="back-btn" @click="back()">
      Back
    </div>
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
      checkEveryMs: 2000,
      cancelToken: null,
      source: null
    }
  },
  async mounted () {
    const walelt = await this.createMerchantWallet()
    this.receiverAddress = walelt.address
    this.checkBalanceInterval = setInterval(this.checkBalance, this.checkEveryMs)
    this.cancelToken = axios.CancelToken
    this.source = this.cancelToken.source()
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
      updateTotal: 'updateTotal',
      clearItems: 'clearItems'
    }),
    async checkBalance () {
      console.log(`checking balance ${this.receiverAddress}`)
      const { data } = await axios.post(config.api + '/getBalance', { address: this.receiverAddress }, { cancelToken: this.source.token })
      console.log('user balance', data.balance, 'target amount', this.total.toString(10))
      if (BigNumber(data.balance).gte(this.total)) {
        this.source.cancel()
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
      this.source.cancel()
      clearInterval(this.checkBalanceInterval)
      this.clearItems()
      this.$router.push({ name: 'Merchant' })
    }
  }
}
</script>

<style scoped>
.back-btn {
  width: 200px;
  margin: 0 auto;
  border-radius: 3px;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5);
  background-color: #9013fe;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  margin-top: 30px;
}
</style>
