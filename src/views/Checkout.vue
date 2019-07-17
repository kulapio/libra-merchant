<template>
  <div>
    <PaymentInfo/>
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
      receiverAddress: 'c5ec44a24834833e5a4214a47138f0cdee43e37ad7ea3b2ad17cd8a1b13fd845',
      checkBalanceInterval: null,
      checkEveryMs: 2000
    }
  },
  mounted () {
    this.checkBalanceInterval = setInterval(this.queryBalance, this.checkEveryMs)
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
    async queryBalance () {
      const { data } = await axios.post(config.api + '/getBalance', { address: this.receiverAddress })
      console.log('user balance', data.balance, 'target amount', this.total.toString(10))
      if (BigNumber(data.balance).gte(this.total)) {
        this.updateTotal(BigNumber(0))
        clearInterval(this.checkBalanceInterval)
        this.$router.push({ name: 'ThankYou', query: { amountReceived: BigNumber(data.balance) } })
      }
    },
    back () {
      this.updateTotal(BigNumber(0))
      this.$router.push({ name: 'Merchant' })
    }
  }
}
</script>
